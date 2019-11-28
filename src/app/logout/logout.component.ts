import { HardCodedAuthService } from './../service/hard-coded-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth : HardCodedAuthService) { }

  ngOnInit() {
   // sessionStorage.clear();
   this.auth.logout();
  }

}
