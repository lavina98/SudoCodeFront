import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-update-attendance',
  templateUrl: './update-attendance.component.html',
  styleUrls: ['./update-attendance.component.css']
})
export class UpdateAttendanceComponent implements OnInit {

  attendance: FormGroup;
   constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.attendance = this.fb.group({
      lecname: this.fb.control('', Validators.required),
      students: this.fb.array([])
    });
  }
  add() {
    (<FormArray>this.attendance.get('students')).push(this.fb.control('', Validators.email));
  }

  onSubmit() {
    console.log(this.attendance);
  }

}
