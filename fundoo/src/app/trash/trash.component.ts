import { Component, OnInit } from "@angular/core";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { TrashService } from "../service/trash.service";
import { Notes, Labels } from "../model/note";
import { ViewService } from "../service/view.service";
import { NotesService } from "../service/notes.service";
import { LabelService } from "../service/label.service";

@Component({
  selector: "app-trash",
  templateUrl: "./trash.component.html",
  styleUrls: ["./trash.component.css"]
})
export class TrashComponent implements OnInit {
  /**
   * variable to check whether the error occured or not
   */
  public iserror = false;
  public errorMessage = "";
  /**
   * variable to hold user email
   */
  notes: Notes[] = [];
  labeldata: any = [];
  email: string = "";
  public res;
  public view;
  wrap: string = "wrap";
  direction: string = "row";
  layout: string = this.direction + " " + this.wrap;
  /**
   * variable to to store labels
   */
  labels: Labels[] = [];
  constructor(
    private _cookieService: CookieService,
    private trashService: TrashService,
    private viewService: ViewService,
    private notesService: NotesService,
    private labelservice: LabelService
  ) {
    this.viewService.getView().subscribe(res => {
      console.log("View Result is ", res);
      this.view = res;
      this.direction = this.view.data;
      console.log("Direction is :", this.direction);

      this.layout = this.direction + " " + this.wrap;
      console.log("Layout is ", this.layout);
    });
  }

  ngOnInit() {
    this.email = this._cookieService.get("email");

    let obs = this.trashService.fetchTrashNote(this.email);
    obs.subscribe(
      (res: any) => {
        debugger;
        this.notes = res;
      },
      error => {
        this.iserror = true;
        this.errorMessage = error.message;
      }
    );
    this.setLabel("id", "abel");
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
   * @method deleteNote()
   * @return void
   * @param id
   * @description Function to delete the note permanetly
   */
  deletNote(id) {
    let obs = this.trashService.deletTrashNote(id, this.email);
    obs.subscribe((res: any) => {
      if (res.error == 202) {
        alert("Unknown data");
      } else {
        this.notes = res;
      }
    });
  }

  /**
   * @method resatoreNote()
   * @return void
   * @param id
   * @description Function to restore note
   */
  restoreNote(id) {
    let obs = this.trashService.restoreTrashNote(id, this.email);
    obs.subscribe((res: any) => {
      if (res.error == 202) {
        alert("Unknown data");
      } else {
        this.notes = res;
      }
    });
  }
}
