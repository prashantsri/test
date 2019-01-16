import { Injectable } from "@angular/core";
import { serviceUrl } from "../serviceUrl/serviceurl.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TrashService {
  constructor(private serviceurl: serviceUrl, private http: HttpClient) {}
  /**
   * @method fetchTrashNote()
   * @return observable data
   * @param email
   * @description Function to send email and id to server
   */
  fetchTrashNote(email) {
    let headers_object = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );

    let TrashNote = new FormData();
    TrashNote.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.trashFetchTrashNote,
      TrashNote,
      { headers: headers_object }
    );
  }

  /**
   * @method deletTrashNote()
   * @return observable data
   * @param email
   * @param id
   * @description Function to send email and id to server
   */
  deletTrashNote(id, email) {
    let headers_object = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );

    let deleteNote = new FormData();
    deleteNote.append("id", id);
    deleteNote.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.trashFetchDeleteNote,
      deleteNote,
      { headers: headers_object }
    );
  }

  /**
   * @method restoreTrashNote()
   * @return observable data
   * @param email
   * @param id
   * @description Function to send email and id to server
   */
  restoreTrashNote(id, email) {
    let headers_object = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );
    let restoreTrashNote = new FormData();
    restoreTrashNote.append("id", id);
    restoreTrashNote.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.trashRestoreDeletedNote,
      restoreTrashNote,
      { headers: headers_object }
    );
  }
}
