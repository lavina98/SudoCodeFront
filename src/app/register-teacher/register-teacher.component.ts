import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {

  register: FormGroup;
  coll: string[] = ['SPIT', 'KJ'];
  depart: string[] = ['COMPS', 'IT', 'ETRX', 'EXTC' ];
  constructor() { }

  ngOnInit() {
    this.register = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required),
      dept: new FormControl('', Validators.required),
      college: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.register);
  }

}
