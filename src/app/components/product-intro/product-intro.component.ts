import { Component, OnInit } from '@angular/core';
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
        backgroundColor: 'rgba(230, 1, 21, 0.8)',
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class ProductIntroComponent implements OnInit {
scrollY: number = 0;
  top: number = 0;
  constructor() { }

  ngOnInit() {
    this.onscroll();
  }
  onscroll() {
    let oTop = $('.top-header')[0].offsetHeight;
    this.top = oTop;
    // console.log(oTop)
    window.onscroll = () => {
      console.log(1);
      // 获取页面滚动的距离
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollY = t;
    };
  }

}
