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
  constructor(private router : Router, private auth : HardCodedAuthService) {

  }

  ngOnInit() {
  }

  //auth
  submitLogin(){
    if(this.auth.authenticate(this.username, this.password)===true ){
      this.invalidStatus = false;
      this.router.navigate(['welcome', this.username]); //redirects to welcome page with username param
      //console.log('OKOK');
    }else{this.invalidStatus = true;
    }
  }

}
