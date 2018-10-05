import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reference-material',
  templateUrl: './reference-material.component.html',
  styleUrls: ['./reference-material.component.css']
})
export class ReferenceMaterialComponent implements OnInit {

  refMaterial: FormGroup ;
  constructor() { }

  ngOnInit() {
    this.refMaterial = new FormGroup({
      course: new FormControl(''),
      topic: new FormControl('', Validators.required),
      desc: new FormControl(''),
      link: new FormControl('')
    });
  }
  onSubmit() {
    console.log(this.refMaterial);
  }

}
