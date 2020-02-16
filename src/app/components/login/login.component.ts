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
    private nav: UpdateNavService
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

  onLogin(value){
    this.nav.login(value)
    .then( res => {
      this.loginData = res;
        if(res){
        localStorage.setItem('token', this.loginData.user.uid);
        localStorage.setItem('userId', this.loginData.user.uid);
        localStorage.setItem('role', 'admin')
        this.dialog.closeAll()
        this.nav.updateNav(this.checkAdmin);
        alert('Successfully logged in.')
        }

    }).catch( err => {
      console.log(err)
    })
  }

  // onLogin(value){
  //   this.http.post('https://portfolionodejs-env.mx7xwvawx9.us-east-2.elasticbeanstalk.com/api/login/login', value).subscribe( res => {
  //     this.loginData = res;
  //     if(res){
  //       localStorage.setItem('token', this.loginData.token);
  //       localStorage.setItem('userId', this.loginData.userId);
  //       localStorage.setItem('role', this.loginData.role)
  //       this.dialog.closeAll()
  //       this.updateNav.updateNav(this.checkAdmin);
  //       alert('Successfully logged in.')

  //     } else {
  //       alert("login unsuccessful.")
  //     }
  //   })
  // }

  checkAdmin(){
    let adminCheck = localStorage.getItem('role');
     if(adminCheck === 'admin'){
        return;
     } else {
        alert('user is not an admin')
     }  
  }

}
