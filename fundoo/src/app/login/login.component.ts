import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { LoginService } from "../service/login.service";
import { Router } from "@angular/router";

import { CookieService } from "angular2-cookie/services/cookies.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private S_login: LoginService,
    private router: Router,
    private _cookieService: CookieService
  ) {}
  model: any = {};
  public iserror = false;
  public errorMessage = "";
  usererror: string = "";
  ngOnInit() {}

  email = new FormControl("", [Validators.required, Validators.email]);
  /**
   * @method getErrorMessage()
   * @return void
   * @description Function to error validation
   */
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return "must enter a value";
    } else if (this.email.hasError("email")) {
      return "Not a valid email";
    } else {
      return "";
    }
  }
  /**
   * @method getPassErrorMessage()
   * @return void
   * @description Function to error validation
   */
  pass = new FormControl("", [Validators.required]);
  getPassErrorMessage() {
    if (this.pass.hasError("required")) {
      return "must enter a value";
    } else {
      return "must enter 6 digit password";
    }
  }

  /**
   * @method login()
   * @return void
   * @description Function to error validation
   */
  login() {
    this._cookieService.put("email", this.model.email);
    let obs = this.S_login.UserLoginData(this.model);
    debugger;
    obs.subscribe(
      (res: any) => {
        if (res.message == "200") {
          debugger;
          localStorage.setItem("token", res.token);

          this.router.navigate(["/fundoo"]);
        } else if (res.message == "404") {
          this.usererror = "user not found";
        } else if (res.message == "401") {
          this.usererror = "Email is Not Registered";
        } else {
          this.usererror = "invalid password";
        }
      },
      error => {
        this.iserror = true;
        this.errorMessage = error.message;
      }
    );
  }
}
