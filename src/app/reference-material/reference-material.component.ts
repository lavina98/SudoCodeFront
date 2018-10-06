import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RefMaterialService } from '../services/refmaterial.service';

@Component({
  selector: 'app-reference-material',
  templateUrl: './reference-material.component.html',
  styleUrls: ['./reference-material.component.css']
})
export class ReferenceMaterialComponent implements OnInit {

  refMaterial: FormGroup ;
  constructor(private refematerialService: RefMaterialService) { }

  ngOnInit() {
    this.refMaterial = new FormGroup({
      course: new FormControl(''),
      topic: new FormControl('', Validators.required),
      description: new FormControl(''),
      link: new FormControl('')
    });
  }
  onSubmit() {
    console.log(this.refMaterial);
    if (this.refMaterial.valid) {
      this.refematerialService.addRef(this.refMaterial.value).subscribe(
        (data) => {
          console.log(data);
        }
      );
    }
  }

}
