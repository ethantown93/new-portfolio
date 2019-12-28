import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { ContactComponent } from '../contact/contact.component';
import { Router } from '@angular/router';
import { UpdateNavService } from '../../services/update-nav.service';

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

  constructor(private updateNav: UpdateNavService, private router: Router, private breakpointObserver: BreakpointObserver, private dialog: MatDialog) {}

  ngOnInit(){
    this.updateNav.updateNavBar$.subscribe(method => {
      if(method) {
        method();
        this.isAdmin = true;
      } else {
        alert('no message received')
      }
    })
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
    this.isAdmin = false;
    this.router.navigate(['/']);
  }

}
