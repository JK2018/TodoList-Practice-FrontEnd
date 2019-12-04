import { BasicAuthService } from "./../basic-auth.service";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor(private basicAuthService: BasicAuthService) {}

  /**
   * Adds basic auth info in every request's header
   */
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }

    return next.handle(request);
  }
}
