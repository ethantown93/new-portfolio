import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-devops-presentations',
  templateUrl: './devops-presentations.component.html',
  styleUrls: ['./devops-presentations.component.css']
})
export class DevopsPresentationsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  presentations: any = [];
  error = 'No data found'
  noData: boolean = false;

  ngOnInit() {
    this.http.get('http://localhost:3000/api/p/video-presentations').subscribe( res => {
      if(!res){
        console.log('no data');
      } else if (res) {
        this.presentations = res;
      } else {
        console.log('error');
        this.noData = true;
      }
    })
  }

}
