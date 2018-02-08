import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {
  banner: SwiperOptions = {
    slidesPerView : 3,
    slidesPerGroup : 3,
    freeMode : true,
    pagination: '.swiper-pagination',
    
  }
  constructor() { }

  ngOnInit() {
  }

}
