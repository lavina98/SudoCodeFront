import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required]))
});
  }

  onSubmit() {
    console.log(this.login.value);
    if (this.login.valid) {
      this.authService.loginUser(this.login.value).subscribe(
        (data) => {
          console.log(data);
          if (data === 'student') {
            this.route.navigate(['/student/attendance']);
          } else if (data === 'teacher') {
            this.route.navigate(['/teacher/attendance']);
          } else if (data === 'Invalid') {
              alert('Incorrent password');
          } else {
            alert('Invaild Username. Account Doesnt exist');
          }
        }
      );
    }

  }
}
