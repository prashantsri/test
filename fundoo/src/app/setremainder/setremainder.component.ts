import { Component, OnInit } from "@angular/core";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { Notes, Labels, Collaborators } from "../model/note";
import { LabelService } from "../service/label.service";
import { RemainderService } from "../service/remainder.service";
import { NotesService } from "../service/notes.service";
import { CollabaratorService } from "../service/collabarator.service";
import { ViewService } from "../service/view.service";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-setremainder",
  templateUrl: "./setremainder.component.html",
  styleUrls: ["./setremainder.component.css"]
})
export class SetremainderComponent implements OnInit {
  /**
   * variable to hold user email
   */
  email: string = "";
  notes: Notes[] = [];
  /**
   * variable to check whether the error occured or not
   */
  public iserror = false;
  /**
   * to show error message
   */
  public errorMessage = "";
  /**
   * variable to to store labels
   */
  labels: Labels[] = [];
  labeldata: any = [];
  /**
   * variable to store all colaberartor
   */
  collabarators: Collaborators[] = [];
  wrap: string = "wrap";
  direction: string = "row";
  layout: string = this.direction + " " + this.wrap;
  public res;
  public view;
  constructor(
    private _cookieService: CookieService,
    private labelservice: LabelService,
    private remainderService: RemainderService,
    private notesService: NotesService,
    private S_collabarator: CollabaratorService,
    private viewService: ViewService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
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
  }

  ngOnInit() {
    debugger;
    this.email = this._cookieService.get("email");
    /**
     * loading notes while refreshing the page
     */
    let obs = this.remainderService.fetchRemainderNote(this.email);
    obs.subscribe(
      (res: any) => {
        /**
         * assing response to the user notes
         */
        this.notes = res;
      },
      error => {
        this.iserror = true;
        this.errorMessage = error.message;
      }
    );
    let obss = this.labelservice.fetchLabels(this.email);
    obss.subscribe((res: any) => {
      this.labels = res;
    });
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
}
