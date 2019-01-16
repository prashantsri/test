import { Component, OnInit } from "@angular/core";
import { LoginService } from "../service/login.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-forgot",
  templateUrl: "./forgot.component.html",
  styleUrls: ["./forgot.component.css"]
})
export class ForgotComponent implements OnInit {
  constructor(private S_login: LoginService) {}
  model: any = {};
  usererror: string = "";
  ngOnInit() {}
  email = new FormControl("", [Validators.required, Validators.email]);
  /**
   * @method getErrorMessage()
   * @return void
   * @description Function to error validation
   */
  getErrorMessage() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }
  /**
   * @method forgot()
   * @return void
   * @description Function to recover the password
   */
  forgot() {
    let obs = this.S_login.userPasswordRecoveryData(this.model);
    obs.subscribe((res: any) => {
      if (res.message == "200") {
        this.usererror = "reset link has been sent to your mail";
      } else {
        this.usererror = "mail not registered";
      }
    });
  }
}
