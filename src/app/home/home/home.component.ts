import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
declare let window: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bannerList: any = [
    {id: 1, src: 'assets/img/index_banner/banner01.jpg'},
    {id: 2, src: 'assets/img/index_banner/banner02.jpg'},
    {id: 3, src: 'assets/img/index_banner/banner03.jpg'},
    {id: 4, src: 'assets/img/index_banner/banner04.jpg'},
    {id: 5, src: 'assets/img/index_banner/banner05.jpg'},
    {id: 6, src: 'assets/img/index_banner/banner08.jpg'},
  ];
  isTitle: boolean = true;
  isFooter: boolean = true;
  banner: SwiperOptions = {
        effect : 'cube',
        cube: {
          slideShadows: false,
          shadow: false,
          shadowOffset: 0,
          shadowScale: 0.6
        }
   };


  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }

  handleClick($event) {
      console.log($($event.target));
      let $tar = $($event.target);
      this.isTitle = false;
      this.isFooter = false;
      $tar.css({
        'transform': 'scale(1.2)',
        'transition': 'all .3s linear',
      });
      $tar.parent().css('overflow', 'visible');
      let timer = setTimeout(() => {
        $('.index_banner').css({
          'transform': 'translateX(-108%)',
          'transition': 'all .3s linear'
        });
        let timer1 = setTimeout(() => {
          this.router.navigate(['home-pic']);
        }, 300);
      }, 500);
  }

}
