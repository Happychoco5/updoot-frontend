import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isDark: boolean = false;

  constructor( private router: Router, public loginService: LoginService) {}

  ngOnInit(): void {
    this.getThemePref();
    this.getLoginIfTrue();
  }

  toggleDarkTheme():void{
    document.body.classList.toggle('dark-theme');
    this.isDark = !this.isDark; 
    localStorage.setItem("isDark", this.isDark.toString());
  }
  getThemePref()
  {
    console.log("getThemePref called")
    let themePref : string | null = localStorage.getItem("isDark");

    if (themePref === 'true')
    {
      document.body.classList.add('dark-theme');
      this.isDark = true;
    }else{
      document.body.classList.remove('dark-theme');
      this.isDark = false;
    }
  }
  getLoginIfTrue(){
    let loggedInTorF : string | null = localStorage.getItem("loggedIn");
    if (loggedInTorF === 'true')
    {
      this.loginService.loggedIn = true;
    }else{
      this.loginService.loggedIn = false;
    }
  }

  logout() {
    localStorage.removeItem("userInfo");
    localStorage.setItem("loggedIn", "false");
    this.loginService.loggedIn = false;
    this.router.navigateByUrl("/");
  }

}
