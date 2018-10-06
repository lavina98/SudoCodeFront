import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService ) { }

  ngOnInit() {
  }
  logout() {

    this.authService.logout().subscribe(
      (data) => console.log(data)
    );
    this.router.navigate(['']);
  }

}
