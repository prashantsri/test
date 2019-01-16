import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { LoginService } from "../service/login.service";

@Component({
  selector: "app-reset",
  templateUrl: "./reset.component.html",
  styleUrls: ["./reset.component.css"]
})
export class ResetComponent implements OnInit {
  constructor(private S_login: LoginService) {}
  model: any = {};
  public value = "";
  public session = "";
  /**
   * @method ngOnInit()
   * @return void
   * @description Function to fetch data
   */
  ngOnInit() {
    let obs = this.S_login.getEmail(this.model);
    obs.subscribe((res: any) => {
      this.value = res.key;
      this.session = res.session;
    });
  }

  pass = new FormControl("", [Validators.required]);
  /**
   * @method getPassErrorMessage()
   * @return void
   * @description Function to error validation
   */
  getPassErrorMessage() {
    return this.pass.hasError("required")
      ? "You must enter password"
      : "enter 6 digit password";
  }
  /**
   * @method reset()
   * @return void
   * @description Function to reset the user password
   */
  reset() {
    let obs = this.S_login.UserResetData(this.model);
    obs.subscribe((res: any) => {
      if (res.message == "200") {
        // alert("reset successfull");
      } else {
        //  alert("reset unsuccessfull");
      }
    });
  }
}
