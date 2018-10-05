import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {

  events: FormGroup;
  constructor() { }

  ngOnInit() {
    this.events = new FormGroup({
      name: new FormControl('', Validators.required),
      desc: new FormControl('' , Validators.required),
      date: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.events);
  }
}
