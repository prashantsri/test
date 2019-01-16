import { Injectable } from "@angular/core";

import { serviceUrl } from "../serviceUrl/serviceurl.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NotesService {
  constructor(private http: HttpClient, private serviceurl: serviceUrl) {}

  /**
   * @method noteData()
   * @return void
   * @param model
   * @param email
   * @param currentDateTime
   * @param color
   * @param isArchive
   * @param labelname
   * @param isHaveCollabarator
   * @return observable data
   * @description Function to send note data to server
   */

  noteData(
    model,
    email,
    currentDateTime,
    color,
    isArchive,
    labelname,
    isHaveCollabarator,
    image
  ) {
    debugger;
    let headers_object = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );

    let notesData = new FormData();
    notesData.append("email", email);
    notesData.append("title", model.title);
    notesData.append("notes", model.note);
    notesData.append("remainder", currentDateTime);
    notesData.append("color", color);
    notesData.append("label", labelname);
    // notesData.append("isHaveCollabarator", isHaveCollabarator);

    notesData.append("isArchive", "0");

    notesData.append("isHaveCollabarator", "");
    notesData.append("image", image);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.createNotes,
      notesData,
      { headers: headers_object }
    );
  }

  /**
   * @method noteUserData()
   * @return observable data
   * @param email
   * @description Function to send email to server
   */
  noteUserData(email) {
    debugger;
    let notesUserData = new FormData();
    notesUserData.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.userNotes,
      notesUserData
    );
  }

  /**
   * @method dateTimeChange()
   * @return observable data
   * @param otherPresentTime
   * @param id
   * @description Function to send otherPresentTime and id to server
   */
  dateTimeChange(id, otherPresentTime) {
    debugger;
    let DataTime = new FormData();
    DataTime.append("id", id);
    DataTime.append("presentDateTime", otherPresentTime);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.changeDateTime,
      DataTime
    );
  }
  /**
   * @method colorChange()
   * @return observable data
   * @param email
   * @param id
   * @description Function to send email and id to server
   */
  // colorChange(id, color) {
  //   let colorData = new FormData();
  //   colorData.append("id", id);
  //   colorData.append("color", color);
  //   return this.http.post(
  //     this.serviceurl.host + this.serviceurl.changeColor,
  //     colorData
  //   );
  // }
  crud(id, data, flag) {
    let dataform = new FormData();
    dataform.append("id", id);
    dataform.append("data", data);
    dataform.append("flag", flag);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.curdopration,
      dataform
    );
  }
  /**
   * @method setLabels()
   * @return observable data
   * @param label
   * @param id
   * @description Function to send label and id to server
   */
  setLabels(id, label) {
    let noteLabel = new FormData();
    noteLabel.append("id", id);
    noteLabel.append("label", label);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.noteLabel,
      noteLabel
    );
  }
  /**
   * @method deleteLabels()
   * @return observable data
   * @param id
   * @description Function to send id to server
   */
  deleteLabels(id) {
    let deleteNoteLabel = new FormData();
    deleteNoteLabel.append("id", id);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.deleteNoteLabel,
      deleteNoteLabel
    );
  }
}
