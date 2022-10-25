import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isDark: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
    this.getThemePref();
    
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

}
