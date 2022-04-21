import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SahaayService } from '../sahaay.service';

@Component({
  selector: 'app-host-events',
  templateUrl: './host-events.component.html',
  styleUrls: ['./host-events.component.css']
})
export class HostEventsComponent implements OnInit {

  EventForm = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl(''),
    dop: new FormControl('23-12-2021'),
    doe: new FormControl(''),
    lastDay: new FormControl(''),
    startTime: new FormControl(''),
    endTime: new FormControl(''),
    userId: new FormControl('9087654322')
  })


  constructor( private service: SahaayService) { }

  ngOnInit() {
  }

  onSubmit()  {
    console.log(this.EventForm.value)
    this.service.setEvent(this.EventForm.value).subscribe((result: any)=>{console.log(result)})
  }
}
