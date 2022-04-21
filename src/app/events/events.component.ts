import { Component, OnInit } from '@angular/core';
import { SahaayService } from '../sahaay.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any
  constructor(private service: SahaayService) { }

  ngOnInit() {
    this.service.getEvents().subscribe((result: any)=>{this.events=result, console.log(this.events)})
  }

}
