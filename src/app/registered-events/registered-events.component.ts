import { Component, OnInit } from '@angular/core';
import { SahaayService } from '../sahaay.service';

@Component({
  selector: 'app-registered-events',
  templateUrl: './registered-events.component.html',
  styleUrls: ['./registered-events.component.css']
})
export class RegisteredEventsComponent implements OnInit {

  registeredEvents: any

  constructor(private service: SahaayService) { }

  ngOnInit() {
    this.service.getRegisteredEvents("9087654321").subscribe((result: any)=>{console.log(result), this.registeredEvents= result})
  }

}
