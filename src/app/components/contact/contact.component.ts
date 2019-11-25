import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  messageSaved: boolean = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(20)]]
  })

  ngOnInit() {
  }

  onSubmit(value){
    this.http.post('/api/m/messages', value).subscribe( res =>{
      if(!res){
        console.log('no response from db')
      } else if(res){
        console.log("message saved to database");
        this.messageSaved = true;
      } else {
        console.log('an unknown error has occured.')
      }
    });
  };

}
