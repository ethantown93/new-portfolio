import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';
import { Languages } from '../../../../server/models/languages'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: any = [];
  errorMessage = 'There was an error loading this data.';
  error: boolean = false;

  languagesData: any;
  isLoading = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    AOS.init();

    this.http.get('/api/languages').subscribe( res => {
      if(res){
        this.languagesData = res;
        console.log(this.languagesData)
      } else {
        console.log('no entries found');
      }

    })

    this.http.get('/api/p/projects').subscribe( res => {
      if(res){
        this.projects = res;
        console.log(this.projects)
      }else if(!res){
        this.error = true;
      } else {
        console.log('an unknown error has occured')
      }
    })
  }
}

