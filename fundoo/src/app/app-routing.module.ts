import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { VerifyComponent } from "./verify/verify.component";
import { FundooComponent } from "./fundoo/fundoo.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { ResetComponent } from "./reset/reset.component";
import { AuthGuard } from "./auth.guard";
import { NotesComponent } from "./notes/notes.component";
import { CollabaratorComponent } from "./collabarator/collabarator.component";
import { ArchiveComponent } from "./archive/archive.component";
import { LabelsComponent } from "src/app/labels/labels.component";
import { LabelcomponentComponent } from "./labelcomponent/labelcomponent.component";
import { TrashComponent } from "./trash/trash.component";
import { SetremainderComponent } from "./setremainder/setremainder.component";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", redirectTo: "register", pathMatch: "full" },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "verify", component: VerifyComponent },
      {
        path: "fundoo",
        component: FundooComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: "notes",
            component: NotesComponent,
            canActivate: [AuthGuard]
          },
          {
            path: "Collabarator",
            component: CollabaratorComponent,
            canActivate: [AuthGuard]
          },
          {
            path: "archive",
            component: ArchiveComponent,
            canActivate: [AuthGuard]
          },
          {
            path: "Label",
            component: LabelsComponent,
            canActivate: [AuthGuard]
          },
          {
            path: "labelcomp",
            component: LabelcomponentComponent,
            canActivate: [AuthGuard]
          },
          {
            path: "trash",
            component: TrashComponent,
            canActivate: [AuthGuard]
          },
          {
            path: "remainder",
            component: SetremainderComponent,
            canActivate: [AuthGuard]
          }
        ]
      },

      { path: "forgot", component: ForgotComponent },
      { path: "reset", component: ResetComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
