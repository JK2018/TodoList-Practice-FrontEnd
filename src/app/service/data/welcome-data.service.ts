
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  return this.http.get<HelloBean>(`http://localhost:8080/hello/${user}`);
}













}
