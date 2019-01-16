import { Injectable } from "@angular/core";
import { serviceUrl } from "../serviceUrl/serviceurl.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LabelService {
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
    // notesData.append("label", labelname);
    // notesData.append("isHaveCollabarator", isHaveCollabarator);

    notesData.append("isArchive", "0");
    notesData.append("label", "");
    notesData.append("isHaveCollabarator", "");
    notesData.append("image", image);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.createNotes,
      notesData,
      { headers: headers_object }
    );
  }

  /**
   * @method fetchLabels()
   * @return observable data
   * @param email
   * @description Function to send email  to server
   */
  fetchLabels(email) {
    let fetchLabelsss = new FormData();
    fetchLabelsss.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.mainLabelFetchLabelData,
      fetchLabelsss
    );
  }
  /**
   * @method addLabels()
   * @return observable data
   * @param email
   * @param label
   * @description Function to send email and label to server
   */
  addLabels(label, email) {
    let labelData = new FormData();
    labelData.append("label", label);
    labelData.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.mainLabelLabelData,
      labelData
    );
  }
  /**
   * @method changeLabels()
   * @return observable data
   * @param email
   * @param id
   * @param name
   * @description Function to send name,email and id to server
   */
  changeLabels(id, name, email) {
    let changeLabel = new FormData();
    changeLabel.append("id", id);
    changeLabel.append("name", name);
    changeLabel.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.mainLabelChangeLabel,
      changeLabel
    );
  }
  /**
   * @method deleteLabels()
   * @return observable data
   * @param email
   * @param id
   * @description Function to send email and id to server
   */
  deleteLabels(id, email) {
    let deleteLabelData = new FormData();
    deleteLabelData.append("id", id);
    deleteLabelData.append("email", email);
    return this.http.post(
      this.serviceurl.host + this.serviceurl.mainLabelDeleteLabel,
      deleteLabelData
    );
  }
}
