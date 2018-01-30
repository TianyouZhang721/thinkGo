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
          src:"assets/img/guang/guang01.jpg,assets/img/guang/guang02.jpg,assets/img/guang/guang03.jpg",
          title:'多功能口袋拼接',
          price:'￥298.00'
        }
      ],
      [
        { 
          pid:2,
          src:"assets/img/guang/guang01.jpg,assets/img/guang/guang02.jpg,assets/img/guang/guang03.jpg",
          title:'大牌气质斗篷外套',
          price:'￥651.00'
        }
      ],
      [
        { 
          pid:3,
          src:"assets/img/guang/guang01.jpg,assets/img/guang/guang02.jpg,assets/img/guang/guang03.jpg",
          title:'羊绒毛衣',
          price:'￥333.00'
        }
      ],
      [
        { 
          pid:4,
          src:"assets/img/guang/guang01.jpg,assets/img/guang/guang02.jpg,assets/img/guang/guang03.jpg",
          title:'喇叭裤',
          price:'￥295.00'
        }
      ]
    ];
    srcArr:any;
   

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
    this.getArr();
  }
  getArr() {
    this.srcArr = this.proList[this.id][0].src.split(',');
    console.log(this.srcArr);
  }
  onscroll() {
    let oTop = $('.top-header')[0].offsetHeight;
    this.top = oTop;
    // console.log(oTop)
    window.onscroll = () => {
      // 获取页面滚动的距离
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollY = t;
      if(this.scrollY>this.top){
        console.log(1);
        $('.productintro_return').css({
          'background': 'rgba(0,0,0,0)',
        });
        $('.productintro_right_1').css({
          'background': 'rgba(0,0,0,0)'
        });
        $('.productintro_right_2').css({
          'background': 'rgba(0,0,0,0)'
        });
        $('.productintro_return>a').css({
          'color': '#000'
        });
        $('.productintro_right_1>a').css({
          'color': '#000'
        });
        $('.productintro_right_2>a').css({
          'color': '#000'
        });
      }else{
        $('.productintro_return').css({
          'background': 'rgba(0,0,0,0.5)',
          'color':'#fff'
        });
        $('.productintro_right_1').css({
          'background': 'rgba(0,0,0,0.5)',
          'color':'#fff'
        });
        $('.productintro_right_2').css({
          'background': 'rgba(0,0,0,0.5)',
          'color':'#fff'
        });
        
      }
    }
  }
  goback() {
      this.location.back();
  }
}
