import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { serviceUrl } from "../serviceUrl/serviceurl.service";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private serviceurl: serviceUrl,
    private route: ActivatedRoute
  ) {}

  /**
   * @method loggedIn()
   * @return boolean
   * @description Function to check the token
   */
  loggedIn() {
    return !!localStorage.getItem("token");
  }

  /**
   * @method UserLoginData()
   * @return observable data
   * @param login
   * @description Function to send login data to server
   */
  UserLoginData(login) {
    let userLoginData = new FormData();
    userLoginData.append("email", login.email);
    userLoginData.append("password", login.pass);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.login,
      userLoginData
    );
  }

  /**
   * @method verifyemail()
   * @return observable data
   * @description Function to send verify  email
   */
  verifyemail() {
    let verifyEmailId = new FormData();
    verifyEmailId.append(
      "token",
      this.route.snapshot.queryParamMap.get("token")
    );
    return this.http.post(
      this.serviceurl.host + this.serviceurl.verifyEmail,
      verifyEmailId
    );
  }

  /**
   * @method userPasswordRecoveryData()
   * @return observable data
   * @param forgot
   * @description Function to send forgot to server
   */
  userPasswordRecoveryData(forgot) {
    let userPassRecoveryData = new FormData();
    userPassRecoveryData.append("email", forgot.email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.forgot,
      userPassRecoveryData
    );
  }

  /**
   * @method UserResetData()
   * @return observable data
   * @param reset
   * @description Function to send reset data to server
   */

  UserResetData(reset) {
    let userResetData = new FormData();
    userResetData.append(
      "token",
      this.route.snapshot.queryParamMap.get("token")
    );
    userResetData.append("pass", reset.pass);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.reset,
      userResetData
    );
  }

  /**
   * @method getEmail()
   * @return observable data
   * @param reset
   * @description Function to send get email from server
   */
  getEmail(reset) {
    let urlTocken = new FormData();
    urlTocken.append("token", this.route.snapshot.queryParamMap.get("token"));
    return this.http.post(
      this.serviceurl.host + this.serviceurl.getEmail,
      urlTocken
    );
  }
}
