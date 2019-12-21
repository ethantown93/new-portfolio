import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: any = [];
  errorMessage = 'There was an error loading this data.';
  error: boolean = false;

  barChart = [];
  languagesData: any;
  languagesValue: any = [];
  languageNames: any = [];
  isLoading = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    AOS.init();

    this.http.get('/api/languages').subscribe( res => {
      if(res){
        this.languagesData = res;
        console.log(this.languagesData)

        for(let data of this.languagesData){
          console.log(data)
          for(let value of data.languages){
            this.languagesValue.push(value.proficiency)
            this.languageNames.push(value.language)
          }
        }
      } else{
        console.log('error')
      }

      setTimeout(()=>{this.buildChart()}, 100)
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

  buildChart(){
    this.barChart = new Chart('barChart', {
      type: 'bar',
    data: {
     labels: this.languageNames,
     datasets: [{
         label: '% of skill',
         data: this.languagesValue,
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)'
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Coding Languages",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
  }
}

