import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';
import { UpdateNavService } from '../../services/update-nav.service';
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

  languagesData: any = [];
  isLoading = false;

  constructor(private http: HttpClient, private nav: UpdateNavService) { }

  ngOnInit() {

    AOS.init();

    this.nav.getProj().subscribe( res => {
      if(res) {
        console.log(res)

        this.projects = res;
      }
    })

    this.nav.getLang().subscribe( res => {
      if(res){
        console.log(res)
        this.languagesData = res;
      }
    })

    // this.http.get('https://portfolionodejs-env.mx7xwvawx9.us-east-2.elasticbeanstalk.com/api/languages').subscribe( res => {
    //   if(res){
    //     this.languagesData = res;
    //     console.log(this.languagesData)
    //   } else {
    //     console.log('no entries found');
    //   }

    // })

    // this.http.get('https://portfolionodejs-env.mx7xwvawx9.us-east-2.elasticbeanstalk.com/api/p/projects').subscribe( res => {
    //   if(res){
    //     this.projects = res;
    //     console.log(this.projects)
    //   }else if(!res){
    //     this.error = true;
    //   } else {
    //     console.log('an unknown error has occured')
    //   }
    // })
  }
}

