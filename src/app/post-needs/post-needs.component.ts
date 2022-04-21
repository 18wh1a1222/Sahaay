import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SahaayService } from '../sahaay.service';

@Component({
  selector: 'app-post-needs',
  templateUrl: './post-needs.component.html',
  styleUrls: ['./post-needs.component.css']
})
export class PostNeedsComponent implements OnInit {

  NeedForm = new FormGroup({
    type: new FormControl(''),
    desc: new FormControl(''),
    pay: new FormControl(''),
    dop: new FormControl('2021-12-17'),
    status: new FormControl('pending'),
    doc: new FormControl('2021-01-01'),
    userId: new FormControl('9087654321')
  })

  constructor(private service: SahaayService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.NeedForm.value)
    this.service.setNeed(this.NeedForm.value).subscribe((result: any)=>{console.log(result)})
  }

}
