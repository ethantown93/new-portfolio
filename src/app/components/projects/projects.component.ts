import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdateNavService } from '../../services/update-nav.service';
import { MatDialog } from '@angular/material/dialog';

import { ProjectDetailsComponent } from '../project-details/project-details.component';

import AOS from 'aos';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor( private http: HttpClient, private nav: UpdateNavService, public dialog: MatDialog) { }

  projects: any = [];
  projectsLoaded: boolean = false;


  ngOnInit(): void {

    AOS.init();

    this.nav.getProj().subscribe( res => {
      if(res) {
        console.log(res)
        this.projects = res;
        this.projectsLoaded = true;
        console.log(this.projectsLoaded)
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
