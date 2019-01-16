import { Component, OnInit, Inject } from "@angular/core";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { CollabaratorService } from "../service/collabarator.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
@Component({
  selector: "app-collabarator",
  templateUrl: "./collabarator.component.html",
  styleUrls: ["./collabarator.component.css"]
})
export class CollabaratorComponent implements OnInit {
  /**
   * variable to hold the email
   */
  email = "";
  /**
   * variable to hold the owner of the colabarator
   */
  owner = "";
  /**
   * variable to hold the all of the colabarator
   */
  collabarators;
  /**
   * variable to hold the owner of the fundoo
   */
  mainOwner = "";
  /**
   * variable to check weather the error accured or not
   */
  errorCheck = false;
  emmail;
  /**
   * variable to check weather the error in response  or not
   */
  public iserror = false;
  /**
   * variable to hold the error massage
   */
  public errorMessage = "";

  constructor(
    public dialogRef: MatDialogRef<CollabaratorComponent>,
    private _cookieService: CookieService,
    private collabaratorService: CollabaratorService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    debugger;
    this.data;
    this.mainOwner = this._cookieService.get("email");
    if (this.data.user == "01") {
      this.owner = this.mainOwner;
    } else {
      let obs = this.collabaratorService.fetchCollabarators(
        this.data.user.id,
        this.data.user.email
      );
      obs.subscribe(
        (res: any) => {
          debugger;
          this.collabarators = res;
        },
        error => {
          this.iserror = true;
          this.errorMessage = error.message;
        }
      );

      let obss = this.collabaratorService.fetchOwner(
        this.data.user.id,
        this.mainOwner
      );
      obss.subscribe(
        (res: any) => {
          if (res.owner.owner != undefined) {
            this.owner = res.owner.owner;
          } else {
            this.owner = this._cookieService.get("email");
          }
        },
        error => {
          this.iserror = true;
          this.errorMessage = error.message;
        }
      );
    }
  }
  /**
   * @method addCollabarator()
   * @return void
   * @param id
   * @param email
   * @description Function to fetch the data from source
   */
  addCollabarator(id, owneremail, email) {
    debugger;

    if (id == "undefined" && owneremail == "undefined" && email != "") {
      let obs = this.collabaratorService.addCollabarators(id, "", email);
      obs.subscribe(
        (res: any) => {
          if (res.status == 300) {
            this.errorCheck = true;
          } else {
            this.collabarators = res;
          }
        },
        error => {
          this.iserror = true;
          this.errorMessage = error.message;
        }
      );
      this.emmail = null;
    } else {
      let obs = this.collabaratorService.addCollabarators(
        id,
        owneremail,
        email
      );
      obs.subscribe(
        (res: any) => {
          if (res.status == 300) {
            this.errorCheck = true;
          } else {
            this.collabarators = res;
          }
        },
        error => {
          this.iserror = true;
          this.errorMessage = error.message;
        }
      );
      this.emmail = null;
    }
  }

  /**
   * @method deleteCollabarator()
   * @return void
   * @param id
   * @param collId
   * @param noteId
   * @param email
   * @param owner
   * @param currentEmail
   * @description Function to delete collabarator
   */
  deleteCollabarator(collId, noteId, email, owner, currentEmail) {
    debugger;
    if (owner == this.mainOwner) {
      let obs = this.collabaratorService.deleteCollabarators(
        collId,
        email,
        currentEmail,
        noteId
      );
      obs.subscribe(
        (res: any) => {
          this.collabarators = res;
        },
        error => {
          this.iserror = true;
          this.errorMessage = error.message;
        }
      );
    } else if (currentEmail == this.mainOwner) {
      alert("remove my self");
      let obs = this.collabaratorService.deleteCollabarators(
        collId,
        email,
        currentEmail,
        noteId
      );
      obs.subscribe(
        (res: any) => {
          this.collabarators = res;
        },
        error => {
          this.iserror = true;
          this.errorMessage = error.message;
        }
      );
    }
  }

  /**
   * @method save()
   * @return void
   * @description Function to fetch the data from source
   */
  save() {
    debugger;
    let obsss = this.collabaratorService.fetchCollabaratorsOfNotes(
      this.mainOwner
    );
    obsss.subscribe((res: any) => {
      this.collabarators = res;
      this.dialogRef.close(this.collabarators);
    });
  }
  /**
   * @method onClose()
   * @return void
   * @description Function to close the subscription
   */
  onClose() {
    this.dialogRef.close();
  }
}
