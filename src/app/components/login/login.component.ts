import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: any;
  loginForm: FormGroup;

  constructor(private dialog: MatDialog, private http: HttpClient, private fb: FormBuilder) { }

  // loginForm = this.fb.group({
  //   email: ["test", [Validators.required, Validators.email]],
  //   password: ["test", Validators.required]
  // })

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

  onLogin(value){
    this.http.post('/api/login/login', value).subscribe( res => {
      this.loginData = res;
      console.log(this.loginData);
      if(res){
        localStorage.setItem('token', this.loginData.token)
        localStorage.setItem('isAuthenticated', 'true')
        this.dialog.closeAll()
        alert('Successfully logged in.')

      } else {
        alert("login unsuccessful.")
        console.log("error");
      }
    })
  }

}
