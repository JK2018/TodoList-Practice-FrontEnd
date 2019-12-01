
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloBean {
  constructor(public msg : string ){
  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  user = sessionStorage.getItem('authenticatedUser');

  constructor(private http : HttpClient) { }

//OBSERVABLE
//when subscribe is successsful , call handleSuccessResponse method.
executeHelloBean(){
  return this.http.get<HelloBean>('http://localhost:8080/hello/');
}


executeHelloBeanWithPathVariable(user){
  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
  let headers = new HttpHeaders({ Authorization: basicAuthHeaderString});
  return this.http.get<HelloBean>(`http://localhost:8080/hello/${user}`,{headers});
}



createBasicAuthenticationHttpHeader(){
  let username = 'j';
  let password = 'k';
  let basicAuthHeaderString = 'Basic' + window.btoa(username + ':' + password);
  return basicAuthHeaderString;
}









}
