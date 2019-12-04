import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { API_URL } from "../app.constants";

export const TOKEN = "token";
export const AUTHENTICATED_USER = "authenticatedUser";

@Injectable({
  providedIn: "root"
})
export class BasicAuthService {
  constructor(private http: HttpClient) {}

  /**
   * passes user nd pw info,
   * creates auth header for the request to /basicauth,
   * executes request.
   * if success, sets data in session and returns response
   */
  executeAuthenticationService(username, password) {
    let basicAuthHeaderString =
      "Basic " + window.btoa(username + ":" + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http
      .get<AuthenticationBean>(
        `${API_URL}/basicauth`, //refers to const in app.constants
        { headers }
      )
      .pipe(
        //pipe indicates what should be done if success or fails
        map(data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
        })
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  logout() {
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }

  isUserLogedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }
}

export class AuthenticationBean {
  constructor(private message: string) {}
}
