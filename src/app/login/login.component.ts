import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SahaayService } from '../sahaay.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserForm = new FormGroup({
    phno: new FormControl(''),
    password: new FormControl('')
  })

  user: any

  constructor(private service: SahaayService, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit() {
    await this.service.LoginUser(this.UserForm.value).then((result: any) => { this.user = result });
    if(this.user && !this.user.length)  {
      alert("Wrong Credentials!!!")
    }
    else {
      sessionStorage.setItem("login", "true");
      sessionStorage.setItem("phno", this.user[0]["phno"])
      if(this.user[0]["type"] == "volunteer")  {
        this.router.navigate(['needs']);
        sessionStorage.setItem("user", "false")
      }
      else {
        this.router.navigate(['events']);
        sessionStorage.setItem("user", "true")
      }
    }
  }
}
