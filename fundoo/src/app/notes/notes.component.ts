import { Component, OnInit } from "@angular/core";
import { NotesService } from "../service/notes.service";
import { Subscription } from "rxjs";
import { Notes, Labels, Collaborators } from "../model/note";
import { Router } from "@angular/router";
import { CollabaratorService } from "../service/collabarator.service";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { FormControl, Validators } from "@angular/forms";
import * as moment from "moment";
import { ImageService } from "../service/image.service";
import { CollabaratorComponent } from "../collabarator/collabarator.component";
import { MatDialog, MatIconRegistry, MatSnackBar } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { ViewService } from "../service/view.service";
import { LabelService } from "../service/label.service";
import { EditnotesComponent } from "../editnotes/editnotes.component";
import { CommonService } from "../service/common.service";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  constructor(
    private notesService: NotesService,
    private router: Router,
    private S_collabarator: CollabaratorService,
    private _cookieService: CookieService,
    private image: ImageService,
    public dialog: MatDialog,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private viewService: ViewService,
    private labelservice: LabelService,
    private commonService: CommonService,
    private snackBar: MatSnackBar
  ) {
    this.viewService.getView().subscribe(res => {
      console.log("View Result is ", res);
      this.view = res;
      this.direction = this.view.data;
      console.log("Direction is :", this.direction);

      this.layout = this.direction + " " + this.wrap;
      console.log("Layout is ", this.layout);
    });

    iconRegistry.addSvgIcon(
      "pin123",
      /**
       * Bypass security and trust the given value
       *  to be a safe resource URL, i.e. a location that may be used to
       *  load executable code
       */
      sanitizer.bypassSecurityTrustResourceUrl(
        "../../assets/img/fundoAssests/pin.svg"
      )
    );

    /**
     * subscribing the notifyObservable variable in common service
     */
    this.searchSubscription = this.commonService.searchDataObservable$.subscribe(
      res => {
        this.searchData = res;
      }
    );
  }

  public res;
  public view;

  /**
   * variable
   */

  obs;
  /**
   * variable to check whether the error occured or not
   */
  public isArchived = "no";

  /**
   * variable to  store selected labels
   */
  public labelname = null;
  /**
   * variable to check the error
   */
  public iserror = false;
  /**
   * variable to toggle between grid and List view
   */
  public grid: boolean;
  /**
   * variable to hold present time
   */
  public PresentTime;
  /**
   * variable to hold present time
   */
  public otherPresentTime;
  /**
   * to show error message
   */
  public errorMessage = "";
  /**
   * var to hold present time
   */
  public currentDateAndTime = "";
  /**
   * variable which holds the color of note
   */
  public color = "";
  /**
   * variable of type subscription
   */
  private subscription: Subscription;
  /**
   * variable of type subscription
   */
  public Mainimage = "";
  private searchSubscription: Subscription;
  /**
   * array to hold user notes data
   */
  model: any = {};
  labeldata: any = [];
  /**
   * array to users notes
   */
  notes: Notes[] = [];
  /**
   * variable to to store labels
   */
  labels: Labels[] = [];
  /**
   * variable to store all colaberartor
   */
  collabarators: Collaborators[] = [];
  /**
   * variable to hold user email
   */
  email: string = "";
  /**
   * variable to hold search data
   */
  wrap: string = "wrap";
  direction: string = "row";
  layout: string = this.direction + " " + this.wrap;
  searchData;
  ngOnInit() {
    this.email = this._cookieService.get("email");
    /**
     * loading notes while refreshing the page
     */
    debugger;
    this.obs = this.notesService.noteUserData(this.email);
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
    // collabarators
    this.viewService.getView().subscribe(res => {
      this.view = res;
      this.direction = this.view.data;

      this.layout = this.direction + " " + this.wrap;
    });
    //testing
    // let obss = this.labelservice.fetchLabels(this.email);
    // obss.subscribe((res: any) => {
    //   /**
    //      * assing response to the user labels

    //      */
    //   this.labels = res;
    //   // obss.unsubscribe();
    // });
    this.setLabel("id", "abel");

    /**
     * method which runs over every 1 second
     */
    setInterval(() => {
      this.remainder123();
    }, 15000);
  }

  /**
   * @method remainder()
   * @return void
   */
  remainder123() {
    // this.toasterservice.success("ddd", "asfasdf");

    var day = new Date();
    var fulldate =
      day.toDateString() + " " + (day.getHours() % 12) + ":" + day.getMinutes();
    fulldate = moment(fulldate).format("DD/MM/YYYY hh:mm") + " pm";

    this.notes.forEach(element => {
      let DateAndTime = fulldate;
      this.currentDateAndTime = DateAndTime;
      /**
       * compare with present time if equal alert remainder
       */
      if (DateAndTime == element.remainder) {
        this.snackBar.open(element.notes, "", {
          duration: 2000
        });
      }
    });
  }

  /**
   * variable holding all main collabarators
   */
  mainCollabarators;
  isHaveCollabarator = true;
  displayMain = false;

  /**
   * @method displayMethod()
   * @return void
   * @description Function to store the user entered notes data
   */
  displayMethod() {
    debugger;
    // if (this.mainCollabarators[0] == undefined) {
    //   this.isHaveCollabarator = false;
    // } else {
    //   this.isHaveCollabarator = true;
    // }

    this.displayMain = !this.displayMain;
    this.email = this._cookieService.get("email");
    this.Mainimage = this.Mainimage.replace("data:image/jpeg;base64,", "");
    this.isHaveCollabarator = false;
    if (
      ((this.model.title != "" ||
        this.model.note != "" ||
        this.Mainimage != "" ||
        this.PresentTime != "") &&
        (this.model.title != undefined || this.model.note != undefined)) ||
      this.Mainimage != "" ||
      this.PresentTime != ""
    ) {
      /**
       * calling the function and subscribing to its response notedata present in the notesservice and
       */
      this.obs = this.notesService.noteData(
        this.model,
        this.email,
        this.PresentTime,
        this.color,
        this.isArchived,
        this.labelname,
        this.isHaveCollabarator,
        this.Mainimage
      );
      this.obs.subscribe(
        (res: any) => {
          /**
           * Checking the authorised user or not
           */
          if (res.error == 404) {
            alert("Unathourized User");
            localStorage.removeItem("token");
            this.router.navigate(["/login"]);
            // obs.unsubscribe();
          } else {
            debugger;
            this.notes = res;
            debugger;
            let obsss = this.S_collabarator.fetchCollabaratorsOfNotes(
              this.email
            );
            obsss.subscribe((ress: any) => {
              this.collabarators = ress;
            });
            let obbs = this.S_collabarator.fetchCollabarators(1111, this.email);
            obbs.subscribe(
              (res: any) => {
                this.mainCollabarators = res;
                // obbs.unsubscribe();
              },
              error => {
                this.iserror = true;
                this.errorMessage = error.message;
              }
            );
            // obs.unsubscribe();
          }
        },
        error => {
          this.iserror = true;
          this.errorMessage = error.message;
        }
      );
      this.model.title = null;
      this.model.note = null;
    } else {
      // let obbs = this.S_collabarator.deleteAllMainCollabarators(
      //   1111,
      //   this.email
      // );
      // obbs.subscribe(
      //   (res: any) => {
      //     this.mainCollabarators = res;
      //     //  obbs.unsubscribe();
      //   },
      //   error => {
      //     this.iserror = true;
      //     this.errorMessage = error.message;
      //   }
      // );
    }
    this.color = null;
    this.isArchived = "no";
    this.Mainimage = "";
    this.PresentTime = "";
    this.timer_button = false;
  }

  remainder() {
    alert("rekjashfhsd");
    var require: any;
    debugger;
    let dateFormat = require("dateformat");
    /**
     * for each runs to check wheather the user time matches with current time
     */
    this.notes.forEach(element => {
      let now = new Date();
      /**
       * formating the current time to the required time format
       */
      let currentTime = dateFormat(now, "hh:MM tt");
      /**
       * formating the current date to the required format
       */
      let currentDate = dateFormat(now, "dd/mm/yyyy");
      let DateAndTime = currentDate + " " + currentTime;
      this.currentDateAndTime = DateAndTime;
      /**
       * compare with present time if equal alert remainder
       */
      if (DateAndTime == element.remainder) {
        alert("remainder");
      }
    });
  }

  displayOtherCards = false;
  timer_button = false;
  timer_panel = false;
  other_timer_button = false;
  other_timer_panel = false;
  remainder_id = "";
  note_id = "";
  /**
   * @method othertimepanel()
   * @return void
   * @param id
   * @description Function to opon time panel card
   */
  othertimepanel(id) {
    this.notes.forEach(element => {
      if (element.id == id) {
        this.other_timer_panel = !this.other_timer_panel;
        this.remainder_id = id;
      }
    });
  }

  /**
   * @method otherClearTimeDate()
   * @return void
   * @param id
   * @description Function to clear the user entered date and time
   */
  otherSaveTimeDate(id) {
    debugger;
    let currentDate = moment(this.model.date).format("DD/MM/YYYY");
    this.currentDateAndTime = currentDate + " " + this.model.time;
    if (id == "01") {
      this.timer_button = true;
      this.PresentTime = this.currentDateAndTime;
    } else {
      this.reminderfun(id, this.currentDateAndTime);
    }
  }

  fulldate: any;
  fulltime: any;
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
   * @method setColorToTitle()
   * @return void
   * @param changecolor
   * @description Function to set colour to title card
   */
  setColorToTitle(changecolor) {
    this.color = changecolor;
  }

  // /**
  //  * @method setColor()
  //  * @return void
  //  * @param changecolor
  //  * @description function to save the color to the database
  //  */
  // setColor(id, changecolor) {
  //   let obs = this.notesService.colorChange(id, changecolor);
  //   obs.subscribe((res: any) => {
  //     // obs.unsubscribe();
  //   });
  //   this.notes.forEach(element => {
  //     if (element.id == id) {
  //       element.color = changecolor;
  //     }
  //   });
  // }

  crud(id, data, flag) {
    debugger;
    if (id == "01" && flag == "delete_Reminder") {
      this.timer_button = false;
      this.PresentTime = "";
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
      let obs = this.notesService.crud(id, data, flag);
      obs.subscribe((res: any) => {
        debugger;
        this.notes = res;
        // obs.unsubscribe();
      });
    }
  }

  /**
   * var to hold image base64url
   */
  public base64textString;
  /**
   * variable to store the note id of image to be added
   */

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

  /**
   * @method openCollabarator()
   * @param user
   * @return void
   * @description Function to open the existing collabarotor
   */
  openCollabarator(user): void {
    const dialogRef = this.dialog.open(CollabaratorComponent, {
      width: "600px",
      data: { user: user }
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(1212);
      debugger;
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

  pinNote(user) {
    debugger;
    let abc = user;
  }
  /**
   * @method setLabel()
   * @return void
   * @param id
   * @param Label
   * @description Function to set the labelflabeldata
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
  /**
   * @method deleteLabel()
   * @return void
   * @param id
   * @description Function to delete label
   */
  deleteLabel(id) {
    debugger;
    let obs = this.notesService.deleteLabels(id);
    obs.subscribe((res: any) => {
      this.labeldata = res;
      // obs.unsubscribe();
    });
    this.notes.forEach(element => {
      if (element.id == id) {
        element.label = null;
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
}
