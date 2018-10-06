import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registercollege',
  templateUrl: './registercollege.component.html',
  styleUrls: ['./registercollege.component.css']
})
export class RegistercollegeComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  registerCollege: FormGroup;
  ngOnInit() {
    this.registerCollege = this.fb.group({
      name: this.fb.control('', Validators.required),
      link: this.fb.control('', Validators.pattern('^(http[s]?:\\/\\/){0,1}(www\\.){0,1}[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z]{2,5}[\\.]{0,1}$')),
    });
  }
  onSubmit() {
    console.log(this.registerCollege);
    if (this.registerCollege.valid) {
      this.authService.registerCollege(this.registerCollege.value).subscribe(
        (data) => {
          console.log(data);
        }
      );
    }
  }
}
