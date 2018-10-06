import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  linkForm: FormGroup;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.linkForm = new FormGroup({
      github: new FormControl(''),
      linkedin: new FormControl(''),
      resume: new FormControl('')
    });
  }
  onSubmit() {
    console.log(this.linkForm);
    this.profileService.addLinks(this.linkForm.value).subscribe(
    (data) => console.log(data)
    );
  }

}
