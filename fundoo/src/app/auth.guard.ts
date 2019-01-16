import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./service/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private S_auth: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.S_auth.isLoggednIn()) {
      debugger;
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
