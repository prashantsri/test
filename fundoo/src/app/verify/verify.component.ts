import { Component, OnInit } from "@angular/core";
import { LoginService } from "../service/login.service";

@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.css"]
})
export class VerifyComponent implements OnInit {
  constructor(private S_login: LoginService) {}

  /**
   * @method ngOnInit()
   * @return void
   * @description Function to fetch data
   */
  ngOnInit() {
    let obs = this.S_login.verifyemail();
    obs.subscribe((res: any) => {
      if (res.message == "200") {
        alert("email id is verified");
      } else {
        alert("Email is not verified");
      }
    });
  }
}
