import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { serviceUrl } from "../serviceUrl/serviceurl.service";
@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor(private http: HttpClient, private serviceurl: serviceUrl) {}

  /**
   * @method UserRegistrationData()
   * @return observable data
   * @param register
   * @description Function to send register data to server
   */
  UserRegistrationData(register) {
    let userRegisterData = new FormData();
    userRegisterData.append("username", register.name);
    userRegisterData.append("email", register.email);
    userRegisterData.append("mobilenumber", register.number);
    userRegisterData.append("password", register.pass);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.register,
      userRegisterData
    );
  }
}
