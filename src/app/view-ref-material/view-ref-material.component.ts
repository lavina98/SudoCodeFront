import { RefMaterialService } from './../services/refmaterial.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-ref-material',
  templateUrl: './view-ref-material.component.html',
  styleUrls: ['./view-ref-material.component.css']
})
export class ViewRefMaterialComponent implements OnInit {

  refMaterial: any;
  constructor(private refMaterialService: RefMaterialService) { }

  ngOnInit() {
     this.refMaterialService.viewRefMaterial().subscribe(
      (data) => {
        console.log(data);
        this.refMaterial = data;
      }
    );
  }

}
