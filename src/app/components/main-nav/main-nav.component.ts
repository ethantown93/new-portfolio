import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { ContactComponent } from '../contact/contact.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isAdmin: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private dialog: MatDialog) {}

  ngOnInit(){
    this.checkAdmin();
  }

  checkAdmin(){
    let adminCheck = localStorage.getItem('role');
    console.log(adminCheck)
     if(adminCheck === 'admin'){
       this.isAdmin = true;
     } else {
       this.isAdmin = false;
     }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContactComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  onLogout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
