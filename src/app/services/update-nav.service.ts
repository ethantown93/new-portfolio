import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MethodCall } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UpdateNavService {

  private updateNavBarSource = new Subject<any>();
  updateNavBar$ = this.updateNavBarSource.asObservable();

  constructor() { }

  updateNav(method){
    console.log(method + 'from service');
    this.updateNavBarSource.next(method);
  }
}