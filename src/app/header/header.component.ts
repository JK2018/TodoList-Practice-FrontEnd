import { BasicAuthService } from "./../service/basic-auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean = false;

  constructor(private auth: BasicAuthService) {}

  ngOnInit() {
    this.isUserLoggedIn = this.auth.isUserLogedIn();
  }
}
