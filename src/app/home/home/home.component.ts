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
picId: number;
  picsList : any = [
        [
          { pid:1,src:"assets/img/indexpic/1-1.jpg"},
          { pid:2,src:"assets/img/indexpic/1-2.jpg"},
          { pid:3,src:"assets/img/indexpic/1-3.jpg"},
          { pid:4,src:"assets/img/indexpic/1-4.jpg"}
        ],
        [
          {pid:1,src:"assets/img/indexpic/2-1.jpg"},
          {pid:2,src:"assets/img/indexpic/2-2.jpg"},
          {pid:3,src:"assets/img/indexpic/2-3.jpg"},
        ],
        [
          {pid:1,src:"assets/img/indexpic/3-1.jpg"},
          {pid:2,src:"assets/img/indexpic/3-2.jpg"},
        ],
        [
          {pid:1,src:"assets/img/indexpic/4-1.jpg"},
          {pid:2,src:"assets/img/indexpic/4-2.jpg"},
          {pid:3,src:"assets/img/indexpic/4-3.jpg"},
          
        ]
  ];
  isTitle: boolean = true;
  isFooter: boolean = true;
  banner: SwiperOptions = {
        effect : 'coverflow',
        slidesPerView: 1.2,
        centeredSlides: true,
   };

   picList: SwiperOptions = {
    pagination : '.swiper-pagination',
    paginationElement : 'li',
  };


  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }

  handleClick($event,index) {
      this.picId = index;
      console.log(this.picId);
      let $tar = $($event.target);
      $tar.parent().parent().siblings().remove();
      this.isFooter = false;
      $tar.css({
        'transform': 'scale(1.43)',
        'transition': 'all .3s linear',
      });
      $tar.parent().css('overflow', 'visible');
      $tar.parent().parent().parent().parent().css('overflow', 'visible');
      $tar.parent().parent().parent().parent().parent().css('overflow', 'visible');
      let timer = setTimeout(() => {
        $tar.css({
          'transform': 'translateX(-50%) scale(1.43)',
          'transition': 'all .3s linear'
        });
        let timer1 = setTimeout(() => {
          $('#index_box').remove();
          $('.home_pic_all').show();
        }, 300);
      //   let timer1 = setTimeout(() => {
      //     this.router.navigate(['home-pic/'+index]);
      //   }, 1000);
      }, 500);
  }
  yidong($event) {
      let $tar = $($event.target);
      console.log($tar);
      let X = $event.touches[0].pageX; // 开始
      let i = $tar.parent().parent().index();
      if(i == this.picsList[this.picId].length-1){
        $tar.bind("touchend",(e)=>{
          let x = e.changedTouches[0].pageX; // 结束
          if(X - x > 50) {
              this.router.navigate(['home-shopping']);
          }
        })
      }
      
  }

}
