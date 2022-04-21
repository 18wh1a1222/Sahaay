import { Component, OnInit } from '@angular/core';
import { SahaayService } from '../sahaay.service';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.css']
})
export class NeedsComponent implements OnInit {

  needsList: any; 
  need: any;

  constructor(private service: SahaayService) { }

  ngOnInit() {
    this.getNeedsList();
  }

  async getNeedsList()  {
    await this.service.getNeeds("pending").then((result: any)=>{console.log(result), this.needsList = result});
  }

  goToConnect(item) {
    this.need = item;
    // console.log(this.need["needId"])
    sessionStorage.setItem("needId", this.need["needId"]);
  }

}