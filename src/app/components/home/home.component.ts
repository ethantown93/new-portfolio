import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdateNavService } from '../../services/update-nav.service';
import { MatDialog } from '@angular/material/dialog';

import AOS from 'aos';

import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  projects: any = [];
  errorMessage = 'There was an error loading this data.';
  error: boolean = false;
  projectsLoaded: boolean = false;

  languagesData: any = [];
  isLoading = false;

  constructor(private http: HttpClient, private nav: UpdateNavService, public dialog: MatDialog) { }

  ngOnInit() {

    AOS.init();

    this.nav.getProj().subscribe( res => {
      if(res) {
        console.log(res)
        this.projects = res;
        this.projectsLoaded = true;
        console.log(this.projectsLoaded)
      }
    })

    this.nav.getLang().subscribe( res => {
      if(res){
        console.log(res)
        this.languagesData = res;
      }
    })

  }

  openDialog(project) {
    const dialogRef = this.dialog.open(ProjectDetailsComponent, { data: project });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}

