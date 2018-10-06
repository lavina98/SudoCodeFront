import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.sevice';

@Component({
  selector: 'app-get-events',
  templateUrl: './get-events.component.html',
  styleUrls: ['./get-events.component.css']
})
export class GetEventsComponent implements OnInit {

  eventsArr: any;
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsArr = this.eventsService.getEvents().subscribe(
      (data) => {
        this.eventsArr = data;
        console.log(this.eventsArr);
      }
    );
  }

}
