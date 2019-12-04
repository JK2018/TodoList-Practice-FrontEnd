import { BasicAuthService } from "./../service/basic-auth.service";
import { Router } from "@angular/router";
import { Component, OnInit, Output, NgModule } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = ""; //try j
  password = ""; //try k
  invalidMsg = "Invalid credentials :(";
  invalidStatus = false;

  constructor(
    private router: Router,
    private basicAuthService: BasicAuthService
  ) {}

  ngOnInit() {}

  /**
   * calls the executeAuthenticationservice method
   * in order to verify credentials.
   * if success then reoutes to welcome page else error
   */
  handleBasicAuthLogin() {
    this.basicAuthService
      .executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(["welcome", this.username]);
          this.invalidStatus = false;
        },
        error => {
          console.log(error);
          this.invalidStatus = true;
        }
      );
  }
}
