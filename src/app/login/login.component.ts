import { BasicAuthService } from './../service/basic-auth.service';
import { HardCodedAuthService } from './../service/hard-coded-auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output, NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';  //try j
  password = '';  //try k
  invalidMsg = 'Invalid credentials :(';
  invalidStatus = false;

  //router injection for redirection
  constructor(private router : Router, private auth : HardCodedAuthService, private basicAuthService :BasicAuthService) {

  }

  ngOnInit() {
  }

  //auth
  /**
  submitLogin(){
    if(this.auth.authenticate(this.username, this.password)===true ){
      this.invalidStatus = false;
      this.router.navigate(['welcome', this.username]); //redirects to welcome page with username param
      //console.log('OKOK');
    }else{this.invalidStatus = true;
    }
  }**/




    //auth
    //calls the executeAuthenticationservice method, if success then reoutes to welcome page else error
    handleBasicAuthLogin() {
      this.basicAuthService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log('data : ' + data);
          this.router.navigate(['welcome', this.username]);
          this.invalidStatus = false;
          console.log('invalid status : ' + this.invalidStatus);
        },
        error => {
          console.log(error);
          this.invalidStatus = true;
        }
      );


    }

}
