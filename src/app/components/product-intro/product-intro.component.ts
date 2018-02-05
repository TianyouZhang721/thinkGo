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
      transition('inactive <=> active', animate('500ms ease-in')),
      transition('active <=> inactive', animate('500ms ease-out'))
    ])
  ]
})
export class ProductIntroComponent implements OnInit {
  id:number;
  scrollY: number = 0;
  top: number = 0;
  proList : any = 
    [
      [
        { 
          pid:1,
          src:"assets/img/upan/u1.jpg,assets/img/upan/u2.jpg,assets/img/upan/u3.jpg",
          title:'创意U盘',
          price:'￥55.00'
        }
      ],
      [
        { 
          pid:2,
          src:"assets/img/upan/u4.jpg,assets/img/upan/u5.jpg,assets/img/upan/u6.jpg",
          title:'创意U盘',
          price:'￥129.00'
        }
      ],
      [
        { 
          pid:3,
          src:"assets/img/cup/cup1.jpg,assets/img/cup/cup2.jpg,assets/img/cup/cup3.jpg",
          title:'保温杯',
          price:'￥120.00'
        }
      ],
      [
        { 
          pid:4,
          src:"assets/img/cup/cup4.jpg,assets/img/cup/cup5.jpg,assets/img/cup/cup6.jpg",
          title:'保温杯',
          price:'￥223.00'
        }
      ],
      [
        { 
          pid:5,
          src:"assets/img/clothes/cloth11.jpg,assets/img/clothes/cloth2.jpg,assets/img/clothes/cloth3.jpg",
          title:'情侣/休闲',
          price:'￥689.00'
        }
      ],
      [
        { 
          pid:6,
          src:"assets/img/clothes/cloth4.jpg,assets/img/clothes/cloth5.jpg,assets/img/clothes/cloth6.jpg",
          title:'情侣/休闲',
          price:'￥589.00'
        }
      ],
      [
        { 
          pid:7,
          src:"assets/img/shoes/shoe1.jpg,assets/img/shoes/shoe2.jpg,assets/img/shoes/shoe3.jpg",
          title:'情侣/休闲',
          price:'￥389.00'
        }
      ],
      [
        { 
          pid:8,
          src:"assets/img/clothes/boy1.jpg,assets/img/clothes/boy2.jpg,assets/img/clothes/boy3.jpg",
          title:'情侣/休闲',
          price:'￥589.00'
        }
      ],
      [
        { 
          pid:9,
          src:"assets/img/clothes/boy3.jpg,assets/img/clothes/boy6.jpg,assets/img/clothes/boy5.jpg",
          title:'情侣/休闲',
          price:'￥689.00'
        }
      ],  
      [
        { 
          pid:10,
          src:"assets/img/clothes/boy6.jpg,assets/img/clothes/boy7.jpg,assets/img/clothes/boy8.jpg",
          title:'情侣/休闲',
          price:'￥889.00'
        }
      ],  
      [
        { 
          pid:11,
          src:"assets/img/other/other1.jpg,assets/img/other/other4.jpg,assets/img/other/other3.jpg",
          title:'情侣/休闲',
          price:'￥120.00'
        }
      ],  
      [
        { 
          pid:12,
          src:"assets/img/other/other5.jpg,assets/img/other/other6.jpg,assets/img/other/other7.jpg",
          title:'情侣/休闲',
          price:'￥120.00'
        }
      ],  
      [
        { 
          pid:13,
          src:"assets/img/other/other9.jpg,assets/img/other/other10.jpg,assets/img/other/other11.jpg",
          title:'情侣/休闲',
          price:'￥1320.00'
        }
      ],  
      [
        { 
          pid:14,
          src:"assets/img/other/other12.jpg,assets/img/other/other15.jpg,assets/img/other/other14.jpg",
          title:'情侣/休闲',
          price:'￥1620.00'
        }
      ],
    ];
    srcArr:any;
   

  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (result:any)=>{
        this.id=result.index;
      }
    )
    this.onscroll();
    this.getArr();
  }
  getArr() {
    this.srcArr = this.proList[this.id][0].src.split(',');
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
      // if (this.scrollY > this.top) {
      //   $('.productintro_return').css({
      //     'background': 'rgba(0,0,0,0)',
      //   });
      //   $('.productintro_right_1').css({
      //     'background': 'rgba(0,0,0,0)'
      //   });
      //   $('.productintro_right_2').css({
      //     'background': 'rgba(0,0,0,0)'
      //   });
      //   $('.productintro_return>a').css({
      //     'color': '#000'
      //   });
      //   $('.productintro_right_1>a').css({
      //     'color': '#000'
      //   });
      //   $('.productintro_right_2>a').css({
      //     'color': '#000'
      //   });
      // }else {
      //   $('.productintro_return').css({
      //     'background': 'rgba(0,0,0,0.5)',
      //   });
      //   $('.productintro_right_1').css({
      //     'background': 'rgba(0,0,0,0.5)',
      //   });
      //   $('.productintro_right_2').css({
      //     'background': 'rgba(0,0,0,0.5)',
      //   });
      //   $('.productintro_return>a').css({
      //     'color': '#fff'
      //   });
      //   $('.productintro_right_1>a').css({
      //     'color': '#fff'
      //   });
      //   $('.productintro_right_2>a').css({
      //     'color': '#fff'
      //   });
      // }
    };
  }
  goback() {
      this.location.back();
  }
}
