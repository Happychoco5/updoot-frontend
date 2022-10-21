import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login/login.service';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) { }
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


  onSubmit(): void {
    this.loginService.login(this.username, this.password);
    this.router.navigateByUrl("/home");
  }
}
