import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isDark: boolean = false;
  loggedIn: boolean = false;

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.getThemePref();
    if (localStorage.getItem("userInfo") != null) {
      this.loggedIn = true;
    }
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

  logout() {
    localStorage.removeItem("userInfo");
    this.router.navigateByUrl("/").then(() => {window.location.reload();
    });
  }

}
