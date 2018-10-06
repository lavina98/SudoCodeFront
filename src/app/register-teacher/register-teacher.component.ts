import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {

  register: FormGroup;
  coll: string[] = ['SPIT', 'KJ'];
  depart: string[] = ['COMPS', 'IT', 'ETRX', 'EXTC' ];
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.register = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required),
      departmentid: new FormControl('', Validators.required),
      collegeid: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.register);
    if (this.register.valid) {
      this.authService.registerTeacher(this.register.value).subscribe(
        (data) => {console.log(data); }
      );
    }
  }

}
