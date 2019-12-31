import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { Router } from '@angular/router';
import { UpdateNavService } from '../../services/update-nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: any;
  loginForm: FormGroup;

  constructor(
    private router: Router, 
    private dialog: MatDialog, 
    private http: HttpClient, 
    private fb: FormBuilder,
    private updateNav: UpdateNavService
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

  onLogin(value){
    this.http.post('/api/login/login', value).subscribe( res => {
      this.loginData = res;
      if(res){
        localStorage.setItem('token', this.loginData.token);
        localStorage.setItem('userId', this.loginData.userId);
        localStorage.setItem('role', this.loginData.role)
        this.dialog.closeAll()
        this.updateNav.updateNav(this.checkAdmin);
        alert('Successfully logged in.')

      } else {
        alert("login unsuccessful.")
      }
    })
  }

  checkAdmin(){
    let adminCheck = localStorage.getItem('role');
     if(adminCheck === 'admin'){
        return;
     } else {
        alert('user is not an admin')
     }  
  }

}
