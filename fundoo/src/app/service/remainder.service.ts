import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { serviceUrl } from "../serviceUrl/serviceurl.service";

@Injectable({
  providedIn: "root"
})
export class RemainderService {
  constructor(private http: HttpClient, private serviceurl: serviceUrl) {}

  /**
   * @method fetchRemainderNote()
   * @return observable data
   * @param email
   * @description Function to send email to server
   */
  fetchRemainderNote(email) {
    debugger;
    let headers_object = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );

    let RemainderNote = new FormData();
    RemainderNote.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.remainderFetchRemainderNote,
      RemainderNote,
      { headers: headers_object }
    );
  }
}
