import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;
  constructor(private authService: AuthService) { }
  coll: string[] = ['SPIT', 'KJ'];
  depart: string[] = ['COMPS', 'IT', 'ETRX', 'EXTC' ];
  ngOnInit() {
    this.register = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
      college: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required])),
      dept: new FormControl('', Validators.compose([Validators.required])),
      year: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  onSubmit() {
    console.log(this.register);
    this.authService.registerStudent(this.register.value).subscribe(
      (data) => console.log(data)
    );
  }

}
