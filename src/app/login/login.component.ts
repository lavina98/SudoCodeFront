import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
});
  }

  onSubmit() {
    if (this.login.valid) {
      this.authService.loginUser(this.login).subscribe(
        (data) => {
          console.log(data);
        }
      );
    }

  }
}
