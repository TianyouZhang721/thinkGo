import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';
declare let window: any;

@Component({
  selector: 'app-product-intro',
  templateUrl: './product-intro.component.html',
  styleUrls: ['./product-intro.component.css'],
})
export class ProductIntroComponent implements OnInit {
  id:number;

  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (result:any)=>{
        console.log(result);
        this.id=result.index;
        console.log(this.id);
      }
    )

  }
  goback() {
      this.location.back();
  }
}
