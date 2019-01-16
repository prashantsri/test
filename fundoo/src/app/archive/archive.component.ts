import { Component, OnInit } from "@angular/core";
import { NotesService } from "../service/notes.service";
import { Router } from "@angular/router";
import { CollabaratorService } from "../service/collabarator.service";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { ImageService } from "../service/image.service";
import { MatDialog } from "@angular/material";
import { Notes, Collaborators, Labels } from "../model/note";
import * as moment from "moment";
import { ArchiveService } from "../service/archive.service";
import { CollabaratorComponent } from "../collabarator/collabarator.component";
import { ViewService } from "../service/view.service";
import { EditnotesComponent } from "../editnotes/editnotes.component";
import { LabelService } from "../service/label.service";
import { Subscription } from "rxjs";
import { CommonService } from "../service/common.service";

@Component({
  selector: "app-archive",
  templateUrl: "./archive.component.html",
  styleUrls: ["./archive.component.css"]
})
export class ArchiveComponent implements OnInit {
  public res;
  public view;
  wrap: string = "wrap";
  direction: string = "row";
  layout: string = this.direction + " " + this.wrap;

  searchData;
  private searchSubscription: Subscription;
  /**
   * variable to hold present time
   */
  public PresentTime;
  timer_button = false;

  /**
   * array to users notes
   */
  notes: Notes[] = [];
  /**
   * variable to to store labels
   */
  labels: Labels[] = [];
  /**
   * variable to hold user email
   */
  email: string = "";
  /**
   * variable
   */

  obs;
  labeldata: any = [];
  /**
   * variable to check whether the error occured or not
   */
  public iserror = false;
  /**
   * to show error message
   */
  /**
   * variable to store all colaberartor
   */
  collabarators: Collaborators[] = [];
  /**
   * var to hold present time
   */
  public currentDateAndTime = "";
  public errorMessage = "";
  /**
   * variable to hold present time
   */
  public otherPresentTime;
  other_timer_button = false;
  other_timer_panel = false;

  /**
   * var to hold image base64url
   */
  public base64textString;
  /**
   * variable of type subscription
   */
  public Mainimage = "";
  constructor(
    private notesService: NotesService,
    private archiveservice: ArchiveService,
    private router: Router,
    private S_collabarator: CollabaratorService,
    private _cookieService: CookieService,
    private image: ImageService,
    public dialog: MatDialog,
    private viewService: ViewService,
    private labelservice: LabelService,
    private commonService: CommonService
  ) {
    this.viewService.getView().subscribe(res => {
      console.log("View Result is ", res);
      this.view = res;
      this.direction = this.view.data;
      console.log("Direction is :", this.direction);

      this.layout = this.direction + " " + this.wrap;
      console.log("Layout is ", this.layout);
    });

    /**
     * subscribing the notifyObservable variable in common service
     */
    this.searchSubscription = this.commonService.searchDataObservable$.subscribe(
      res => {
        this.searchData = res;
      }
    );
  }
  ngOnInit() {
    this.email = this._cookieService.get("email");
    /**
     * loading notes while refreshing the page
     */
    this.obs = this.archiveservice.noteUserData(this.email);
    // this.obs = this.notesService.noteUserData(this.email);
    this.obs.subscribe(
      (res: any) => {
        debugger;
        /**
         * assing response to user notes
         */
        this.notes = res;
      },
      error => {
        this.iserror = true;
        this.errorMessage = error.message;
      }
    );
    let obsss = this.S_collabarator.fetchCollabaratorsOfNotes(this.email);
    obsss.subscribe((ress: any) => {
      this.collabarators = ress;
    });

    this.setLabel("id", "abel");
  }

  imageNoteId;
  /**
   * @method onSelectFile()
   * @return void
   * @description Function to save the image
   */
  onSelectFile(event, noteId) {
    debugger;
    this.imageNoteId = noteId;
    var files = event.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    console.log(binaryString);
    this.base64textString = btoa(binaryString);
    this.notes.forEach(element => {
      if (element.id == this.imageNoteId) {
        element.image = "data:image/jpeg;base64," + this.base64textString;
      }
    });

    if (this.imageNoteId == "01") {
      this.Mainimage = "data:image/jpeg;base64," + this.base64textString;
    } else {
      let obss = this.image.noteSaveImage(
        this.base64textString,
        this.email,
        this.imageNoteId
      );
      obss.subscribe((res: any) => {});
    }
  }
  crud(id, data, flag) {
    debugger;
    if (id == "01" && flag == "delete_Reminder") {
      this.PresentTime = "";
      this.timer_button = false;
    } else {
      this.notes.forEach(element => {
        if (element.id == id) {
          if (flag == "color") {
            element.color = data;
          }
          if (flag == "delete_Reminder") {
            element.remainder = data;
          }
        }
      });
      let obs = this.archiveservice.crud(id, data, flag);
      obs.subscribe((res: any) => {
        debugger;
        this.notes = res;
        // obs.unsubscribe();
      });
    }
  }
  fulldate: any;
  /**
   * functin for set reminder for today button
   */
  today(id) {
    var day = new Date();
    this.fulldate = day.toDateString();
    let currentDate = moment(this.fulldate).format("DD/MM/YYYY");
    this.currentDateAndTime = currentDate + " " + " 08:00 PM";
    if (id == "01") {
      this.timer_button = true;
      this.PresentTime = this.currentDateAndTime;
    } else {
      this.reminderfun(id, this.currentDateAndTime);
    }
  }

  tomorrow(id) {
    debugger;
    var day = new Date();
    day.setDate(day.getDate() + 1);
    this.fulldate = day.toDateString();
    let currentDate = moment(this.fulldate).format("DD/MM/YYYY");
    this.currentDateAndTime = currentDate + " " + " 08:00 AM";
    if (id == "01") {
      this.timer_button = true;
      this.PresentTime = this.currentDateAndTime;
    } else {
      this.reminderfun(id, this.currentDateAndTime);
    }
  }

  nextWeek(id) {
    debugger;
    var day = new Date();

    this.fulldate = day.setDate(day.getDate() + ((1 + 7 - day.getDay()) % 7));
    let currentDate = moment(this.fulldate).format("DD/MM/YYYY");
    this.currentDateAndTime = currentDate + " " + " 08:00 AM";
    if (id == "01") {
      this.timer_button = true;
      this.PresentTime = this.currentDateAndTime;
    } else {
      this.reminderfun(id, this.currentDateAndTime);
    }
  }
  reminderfun(id, date) {
    this.notes.forEach(element => {
      if (element.id == id) {
        element.remainder = date;
        this.otherPresentTime = date;
      }
    });
    //if (this.model.date != null && this.model.time != null)
    if (date != null) {
      let obs = this.notesService.dateTimeChange(id, this.otherPresentTime);
      obs.subscribe((res: any) => {
        //  obs.unsubscribe();
      });
      debugger;
      this.other_timer_button = true;
      this.other_timer_panel = false;
    }
  }

  /**
   * @method openCollabarator()
   * @param user
   * @return void
   * @description Function to open the existing collabarotor
   */
  openCollabarator(user): void {
    debugger;
    const dialogRef = this.dialog.open(CollabaratorComponent, {
      width: "600px",
      data: { user: user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.collabarators = result;
        let obs = this.notesService.noteUserData(this.email);
        obs.subscribe(
          (res: any) => {
            /**
             * assing response to the user notes
             */
            this.notes = res;
            //   obs.unsubscribe();
          },
          error => {
            this.iserror = true;
            this.errorMessage = error.message;
          }
        );
      }
    });
  }

  /**
   * @method openDialog()
   * @return void
   * @param user
   * @description Function to open the dialogbox of editer component
   */

  openDialog(user): void {
    const dialogRef = this.dialog.open(EditnotesComponent, {
      width: "600px",
      panelClass: "custom-dialog-container",
      data: { user: user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.notes = result;
      }
    });
  }

  /**
   * @method setLabel()
   * @return void
   * @param id
   * @param Label
   * @description Function to set the label
   */
  setLabel(id, Label) {
    debugger;
    let obs = this.notesService.setLabels(id, Label);
    obs.subscribe((res: any) => {
      this.labeldata = res;
    });
    this.notes.forEach(element => {
      if (element.id == id) {
        element.label = Label;
      }
    });
    let obss = this.labelservice.fetchLabels(this.email);
    obss.subscribe((res: any) => {
      /**
         * assing response to the user labels
                               
         */
      this.labels = res;
      // obss.unsubscribe();
    });
  }
}
