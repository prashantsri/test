import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { serviceUrl } from "../serviceUrl/serviceurl.service";

@Injectable({
  providedIn: "root"
})
export class CollabaratorService {
  constructor(private http: HttpClient, private serviceurl: serviceUrl) {}

  /**
   * @method fetchCollabaratorsOfNotes()
   * @return observable data
   * @param email
   * @description Function to send email to server
   */
  fetchCollabaratorsOfNotes(email) {
    debugger;
    let headers_object = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );
    let CollabaratorsOfNotes = new FormData();
    CollabaratorsOfNotes.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.collabaratorsOfNotes,
      CollabaratorsOfNotes,
      { headers: headers_object }
    );
  }

  /**
   * @method fetchCollabarators()
   * @return observable data
   * @param email
   * @param id
   * Function to send email and id to server
   */
  fetchCollabarators(id, email) {
    debugger;

    let headers_object = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );
    let idCollabaratorData = new FormData();
    idCollabaratorData.append("id", id);
    idCollabaratorData.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.fetchCollabarators,
      idCollabaratorData,
      { headers: headers_object }
    );
  }

  /**
   * @method deleteAllMainCollabarators()
   * @return observable data
   * @param email
   * @param NoteId
   * @description Function to send email and NoteId to server
   */
  deleteAllMainCollabarators(noteId, email) {
    let deleteAllMainData = new FormData();

    deleteAllMainData.append("noteId", noteId);
    deleteAllMainData.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.deleteAllMainCollabaratorData,
      deleteAllMainData
    );
  }

  /**
   * @method addCollabarators()
   * @return observable data
   * @param email
   * @param id
   * @param collabratorEmail
   * Function to send email and id to server
   */
  addCollabarators(id, owneremail, shareemail) {
    let headers_object = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );
    let collabaratorData = new FormData();
    collabaratorData.append("id", id);
    collabaratorData.append("owneremail", owneremail);
    collabaratorData.append("shareemail", shareemail);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.addCollabarator,
      collabaratorData,
      { headers: headers_object }
    );
  }

  /**
   * @method fetchOwner()
   * @return observable data
   * @param id
   * @description Function to send email  to server
   */
  fetchOwner(id, email) {
    debugger;
    let headers_object = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );
    let idOwner = new FormData();
    idOwner.append("id", id);
    idOwner.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.fetchOwner,
      idOwner,
      { headers: headers_object }
    );
  }
  /**
   * @method deleteCollabarators()
   * @return observable data
   * @param email
   * @param collId
   * @param NoteId
   * @param currentEmail
   * @description Function to send email and id  collId  currentEmail to server
   */
  deleteCollabarators(collId, email, currentEmail, noteId) {
    let headers_object = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );
    let deleteData = new FormData();
    deleteData.append("collId", collId);
    deleteData.append("noteId", noteId);
    deleteData.append("email", email);
    deleteData.append("currentEmail", currentEmail);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.deleteCollabaratorData,
      deleteData,
      { headers: headers_object }
    );
  }
}
