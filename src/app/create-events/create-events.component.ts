import { EventsService } from './../services/events.sevice';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {

  events: FormGroup;
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events = new FormGroup({
      name: new FormControl('', Validators.required),
      desc: new FormControl('' , Validators.required),
      date: new FormControl('', Validators.required),
      course: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.events);
    const arr = this.events.value.date.split('-');
    if (this.events.valid) {
        const val = {name: this.events.value.name ,
          description: this.events.value.desc,
          start_day: 0,
          start_month: 0,
          start_year: 0,
          end_day: arr[2],
          end_month: arr[1],
          end_year: arr [0],
          course: this.events.value.course
        };
        console.log(val);
        this.eventsService.createEvent(val).subscribe(
          (data: any) => console.log(data)
        );
    }
  }
}
