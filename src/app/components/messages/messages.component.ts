import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Object = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('/api/m/read-messages').subscribe( res => {
      if(res){
        console.log(res);
        this.messages = res;
      } else if(!res){
        alert('No messages were found at this time');
      } else {
        alert('Server error');
      }
    })
  }

}
