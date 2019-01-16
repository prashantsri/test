import { Component, OnInit, HostListener } from "@angular/core";
import { ViewService } from "../service/view.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSidenav
} from "@angular/material";
import { LabelsComponent } from "../labels/labels.component";
import { LabelService } from "../service/label.service";
import { CookieService } from "angular2-cookie/services/cookies.service";

import { CommonlabelService } from "../service/commonlabel.service";
import { IfStmt } from "@angular/compiler";
import { ImageService } from "../service/image.service";
import { Router } from "@angular/router";
import { CommonService } from "../service/common.service";
@Component({
  selector: "app-fundoo",
  templateUrl: "./fundoo.component.html",
  styleUrls: ["./fundoo.component.css"]
})
export class FundooComponent implements OnInit {
  grid: boolean = false;
  list: boolean = true;
  drawertest: MatSidenav = null;
  public innerWidth: any;
  ispresent;
  url = "";
  myurl = "";
  public val;
  public alpha;
  /**
   * variable to hold the email
   */
  public email;
  constructor(
    private viewServiceObj: ViewService,
    public dialog: MatDialog,
    private labelservice: LabelService,
    private _cookieService: CookieService,
    private commonlabelService: CommonlabelService,
    private image: ImageService,
    private router: Router,
    private commonService: CommonService
  ) {
    this.changeView();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    // console.log(this.innerWidth);
    if (this.innerWidth <= "991") {
      if (this.drawertest.opened) {
        this.drawertest.toggle();
      }
    }
    // alert(this.innerWidth);
  }
  ngOnInit() {
    this.email = this._cookieService.get("email");
    let obs = this.labelservice.fetchLabels(this.email);
    obs.subscribe((res: any) => {
      this.labels = res;
    });

    /*
     * fetching the profile
     */
    let obss = this.image.fetchProfile(this.email);
    obss.subscribe((res: any) => {
      if (res != "" && res != null) {
        this.ispresent = true;
        this.myurl = res;
      } else {
        if (
          this._cookieService.get("image") != "" &&
          this._cookieService.get("image") != null
        ) {
          this.ispresent = true;
          this.myurl = this._cookieService.get("image");
        } else {
          this.ispresent = false;
        }
      }
    });
    /**
     * get the email present in the cookies
     */
    this.val = this._cookieService.get("email");
    this.alpha = this.val.substring(0, 1);
  }

  /**
   * view of notes
   */
  changeView() {
    debugger;
    if (this.list == true) {
      this.grid = true;
      this.list = false;
    } else {
      this.list = true;
      this.grid = false;
    }

    this.viewServiceObj.gridview();
  }

  /**
   * variable to to store labels
   */
  labels;
  openDialog(): void {
    const dialogRef = this.dialog.open(LabelsComponent, {
      data: { user: "user" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.labels = result;
      }
    });
  }

  /**
   * @method sendLabelName()
   * @return void
   * @description Function to send LabelName
   */
  sendLabelName(selectedLabel) {
    debugger;
    /**
     * sending data to commonservice notifyOther method
     * @param selectedLabel
     */
    this.commonlabelService.notifyLabel(selectedLabel);
  }

  /**
   * @var searchData
   */
  searchData;
  /**
   * @method sendMessage()
   * @return void
   * @description function to send data to service
   */
  sendSearchData() {
    debugger;
    /**
     * sending data to commonservice notifyOther method
     * @param searchData
     */
    this.commonService.sendSearchDataToService(this.searchData);
  }
  /**
   * @method logout()
   * @return void
   * @description function to remove the user account once he choosed to logged out
   */
  logout() {
    this._cookieService.remove("email");
    /**
     *remove the token present in the localstorage with key name token
     */
    localStorage.removeItem("token");
    /**
     *using the router navigate to the login page with router link name login
     */
    this.router.navigate(["/login"]);
  }
}
