import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router
} from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RoleGuardService implements CanActivate {
  constructor(
    private router: Router,
    private http: HttpClient,
    private afAuth: AngularFireAuth,
  ) {}

  userId: string;

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(map(auth => {
        if(!auth) {
            return false;
        } else {
            return true;
        }
    }));
}
}