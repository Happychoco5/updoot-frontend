import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login/login.service';
import { FormBuilder, FormGroup } from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Account } from 'src/app/models/account/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }
  username:string = "";
  password:string = "";

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username:[''],
      password:['']
    });
  }

  registerForm!: FormGroup;
  submitted = false;



  async onSubmit() {
   
    this.loginService.login(this.registerForm.controls["username"].value, this.registerForm.controls["password"].value).subscribe(
      (account) => {localStorage.setItem("userInfo", JSON.stringify(account))}, 
      (error)=> {console.log("An error has occured")}
    )

    

  }
  }

