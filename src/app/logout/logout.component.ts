import { BasicAuthService } from './../service/basic-auth.service';
import { HardCodedAuthService } from './../service/hard-coded-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth : BasicAuthService) { }

  ngOnInit() {
   this.auth.logout();
  }

}
