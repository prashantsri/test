import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterService } from "./service/register.service";
import { serviceUrl } from "./serviceUrl/serviceurl.service";
import { VerifyComponent } from "./verify/verify.component";
import { FundooComponent } from "./fundoo/fundoo.component";
import {
  MatIconModule,
  MatTooltipModule,
  MatToolbarModule,
  MatDividerModule,
  MatSidenavModule,
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBar,
  MatSnackBarModule
} from "@angular/material/";

import { MatListModule } from "@angular/material/list";
import { ForgotComponent } from "./forgot/forgot.component";
import { ResetComponent } from "./reset/reset.component";
import { NotesComponent } from "./notes/notes.component";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { CollabaratorComponent } from "./collabarator/collabarator.component";
import { ArchiveComponent } from "./archive/archive.component";
import { ViewService } from "./service/view.service";
import { LabelsComponent } from "./labels/labels.component";
import { LabelcomponentComponent } from "./labelcomponent/labelcomponent.component";
import { EditnotesComponent } from "./editnotes/editnotes.component";
import { TrashComponent } from "./trash/trash.component";
import { SetremainderComponent } from "./setremainder/setremainder.component";
import { SearchdataPipe } from "./notes/searchdata.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VerifyComponent,
    FundooComponent,
    ForgotComponent,
    ResetComponent,
    NotesComponent,
    CollabaratorComponent,
    ArchiveComponent,
    LabelsComponent,
    LabelcomponentComponent,
    EditnotesComponent,
    TrashComponent,
    SetremainderComponent,
    SearchdataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    NgxMaterialTimepickerModule.forRoot()
  ],
  entryComponents: [EditnotesComponent],
  providers: [serviceUrl, CookieService, ViewService],
  bootstrap: [AppComponent]
})
export class AppModule {}
