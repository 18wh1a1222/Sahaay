import { Component, OnInit } from '@angular/core';
import { SahaayService } from '../sahaay.service';

@Component({
  selector: 'app-my-needs',
  templateUrl: './my-needs.component.html',
  styleUrls: ['./my-needs.component.css']
})
export class MyNeedsComponent implements OnInit {
  needs: any;

  constructor(private service: SahaayService) { }

  ngOnInit() {
    this.service.myNeeds(sessionStorage.getItem("phno")).subscribe((result:any)=>{this.needs=result, console.log(this.needs)})
  }

}
