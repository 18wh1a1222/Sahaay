import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SahaayService } from '../sahaay.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  UserForm = new FormGroup({
    name: new FormControl(''),
    phno: new FormControl(''),
    aadharNo: new FormControl(''),
    dob: new FormControl(''),
    password: new FormControl(''),
    type: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  });

  aadharList: any
  aadharId: any;

  constructor(private service: SahaayService, private router: Router) { }

  ngOnInit() {

  }

  validateAadhar() {
    console.log(this.UserForm.controls['aadharNo'].value)
    if (this.UserForm.controls['aadharNo'].value == '') {
      return false
    }
    else {
      this.aadharId = this.UserForm.controls['aadharNo'].value;
      this.service.getAadharList(this.aadharId).subscribe((result: any) => { this.aadharList = result, console.log(this.aadharList) })
      if (this.aadharList.length == 0) {
        return true
      }
      else {
        if (this.aadharId == this.aadharList[0]["aadharId"]) {
          return false
        }
        return true
      }
    }
  }
  validatePhno() {
    if (this.UserForm.controls['phno'].value == this.aadharList[0]["phno"]) {
      return false
    }
    return true
  }

  onSubmit() {
    console.log(this.UserForm.value);
    this.service.RegisterUser(this.UserForm.value).subscribe((result: any) => { console.log(result) });
    this.router.navigate(['login'])
  }

}
