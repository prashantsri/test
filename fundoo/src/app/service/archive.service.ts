import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { serviceUrl } from "../serviceUrl/serviceurl.service";

@Injectable({
  providedIn: "root"
})
export class ArchiveService {
  constructor(private http: HttpClient, private serviceurl: serviceUrl) {}

  /**
   * @method noteUserData()
   * @return observable data
   * @param email
   * @description Function to send email to server
   */
  noteUserData(email) {
    let notesUserData = new FormData();
    notesUserData.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.userNotesArc,
      notesUserData
    );
  }
  crud(id, data, flag) {
    let dataform = new FormData();
    dataform.append("id", id);
    dataform.append("data", data);
    dataform.append("flag", flag);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.curdoprationArc,
      dataform
    );
  }
}
