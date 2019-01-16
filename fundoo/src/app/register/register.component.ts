import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { RegisterService } from "../service/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private S_register: RegisterService) {}
  model: any = {};
  errormsg: string = "";

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

  mobile = new FormControl("", [
    Validators.required,
    Validators.pattern("[0-9]{10}")
  ]);
  /**
   * @method getMobileErrorMessage()
   * @return void
   * @description Function to error validation
   */
  getMobileErrorMessage() {
    if (this.mobile.hasError("required")) {
      return "must enter a value";
    } else if (this.mobile.hasError("pattern")) {
      return "Not a valid mobile number";
    } else {
      return "";
    }
  }
  name = new FormControl("", [
    Validators.required,
    Validators.pattern("[a-zA-Z]{3,20}")
  ]);
  /**
   * @method getNameErrorMessage()
   * @return void
   * @description Function to error validation
   */
  getNameErrorMessage() {
    if (this.name.hasError("required")) {
      return "must enter a value";
    } else if (this.name.hasError("pattern")) {
      return "only characters allowed ,size allowed {3,20}";
    } else {
      return "";
    }
  }
  pass = new FormControl("", [Validators.required]);
  /**
   * @method getPassErrorMessage()
   * @return void
   * @description Function to error validation
   */
  getPassErrorMessage() {
    if (this.pass.hasError("required")) {
      return "must enter a value";
    } else {
      return "enter 6 digit password";
    }
  }

  register() {
    debugger;
    let obj = this.S_register.UserRegistrationData(this.model);

    obj.subscribe((res: any) => {
      console.log(res.message);
      if (res.message == "200") {
        this.errormsg = "registration is succesfull \n kindly verify your mail";
      } else if (res.message == "304") {
        this.errormsg = "user not registred ,enter valid data";
      } else if (res.message == "201") {
        this.errormsg = "email id is already exist";
      } else if (res.message == "203") {
        this.errormsg = "mobile number is already exist";
      } else {
        this.errormsg = "error 204 no content";
      }
    });
  }
}
