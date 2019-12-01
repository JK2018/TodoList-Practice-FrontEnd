import { Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { HardCodedAuthService } from './../service/hard-coded-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(private auth : HardCodedAuthService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.auth.isUserLogedIn();
  }



}