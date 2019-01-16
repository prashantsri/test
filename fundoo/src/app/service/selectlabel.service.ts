import { Injectable } from "@angular/core";
import { serviceUrl } from "../serviceUrl/serviceurl.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SelectlabelService {
  constructor(private serviceurl: serviceUrl, private http: HttpClient) {}

  /**
   * @method fetchRemainderNote()
   * @return observable data
   * @param email
   * @param label
   * @description Function to send email and label to server
   */
  fetchRemainderNote(label, email) {
    debugger;
    let headers_object = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );
    let fetchData = new FormData();
    fetchData.append("label", label);
    fetchData.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.labelFetchLabelNote,
      fetchData,
      { headers: headers_object }
    );
  }
}
