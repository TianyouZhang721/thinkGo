import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as $ from 'jquery';
declare let window: any;

@Component({
  selector: 'app-product-intro',
  templateUrl: './product-intro.component.html',
  styleUrls: ['./product-intro.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
      })),
      state('active', style({
        position: 'fixed',
        height: '1rem',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255, 255, 255, 1)',
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class ProductIntroComponent implements OnInit {
  id:number;
  scrollY: number = 0;
  top: number = 0;

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
    this.onscroll();

  }
  onscroll() {
    let oTop = $('.top-header')[0].offsetHeight;
    this.top = oTop;
    // console.log(oTop)
    window.onscroll = () => {
      // 获取页面滚动的距离
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollY = t;
    }
  }
  goback() {
      this.location.back();
  }
}
