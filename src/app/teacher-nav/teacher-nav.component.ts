import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-teacher-nav',
  templateUrl: './teacher-nav.component.html',
  styleUrls: ['./teacher-nav.component.css']
})
export class TeacherNavComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logout().subscribe(
      (data) => console.log(data)
    );
    this.router.navigate(['']);
  }

}
