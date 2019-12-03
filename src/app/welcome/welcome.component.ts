import { WelcomeDataService } from './../service/data/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMsgFromService : string;
  errorMsgFromService : string;


  //inj activatedRoute in order to receive route parameter
  constructor(private activatedRoute : ActivatedRoute, private welcomeDataService : WelcomeDataService) { }

  ngOnInit() {
    this.name=sessionStorage.getItem('authenticatedUser');
    //this.name = this.activatedRoute.snapshot.params['username']; // will fetch all the passed params through the route/url
  }

//to be executed on user btn click
  getWelcomeMsg(){
    //suscribe triggers the observable, fetched response and executes instructions.
    this.welcomeDataService.executeHelloBean().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMsgWithPathVariable(){
    this.welcomeDataService.executeHelloBeanWithPathVariable(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessResponse(response){
    this.welcomeMsgFromService = response.msg;
  }

  handleErrorResponse(error){
    this.errorMsgFromService = error.error;
  }

}
