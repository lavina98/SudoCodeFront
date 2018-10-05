import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-registercollege',
  templateUrl: './registercollege.component.html',
  styleUrls: ['./registercollege.component.css']
})
export class RegistercollegeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  registerCollege: FormGroup;
  ngOnInit() {
    this.registerCollege = this.fb.group({
      name: this.fb.control('', Validators.required),
      link: this.fb.control('', Validators.pattern('^(http[s]?:\\/\\/){0,1}(www\\.){0,1}[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z]{2,5}[\\.]{0,1}$')),
      addon: this.fb.array([])
    });
  }
  onSubmit() {
    console.log(this.registerCollege);
  }
  add() {
    (<FormArray>this.registerCollege.get('addon')).push(this.fb.control(''));
  }
}
