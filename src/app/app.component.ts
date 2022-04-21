import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sahaay';
  login = false;
  constructor() {
    sessionStorage.setItem("login", "false");
   }

   isLogin() {
    if(sessionStorage.getItem("login") == "false")  {
      return true;
    }
    return false;
   }

   isUser()  {
     if(sessionStorage.getItem("user") == "true")  {
       return true
     }
     return false;
   }
  
}
