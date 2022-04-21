import { Component, OnInit } from '@angular/core';
import { SahaayService } from '../sahaay.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  needs: any;
  constructor(private service: SahaayService) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("needId"));
    this.service.getNeed(sessionStorage.getItem("needId")).subscribe((result: any)=>{this.needs= result, console.log(this.needs)})
  }

}
