import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RoleGuardService implements CanActivate {
  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  userId: string;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   
    return this.findUserRole().pipe(map(res => {
      let role = res;

      if (role === "admin") {
        return true;
      } else {
        alert("You're not authorized to access that page.")
        this.router.navigate(["/"]);
        return false;
      }
    }))
}

  findUserRole() {
    this.userId = localStorage.getItem('userId');

    return this.http.get('/api/login/user' + this.userId);
  }
}