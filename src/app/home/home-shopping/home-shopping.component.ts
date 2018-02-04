import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-shopping',
  templateUrl: './home-shopping.component.html',
  styleUrls: ['./home-shopping.component.css']
})
export class HomeShoppingComponent implements OnInit {
  shopIntroList :any = [
    {sid:1,stitle:"创意U盘",spec:"办公",src:"assets/img/shejishi/shejishi04.jpg",price:"￥55.00"},
    {sid:2,stitle:"创意U盘",spec:"办公",src:"assets/img/upan/u4.jpg",price:"￥129.00"},
    {sid:3,stitle:"保温杯",spec:"生活用品",src:"assets/img/cup/cup1.jpg",price:"￥120.00"},
    {sid:4,stitle:"保温杯",spec:"生活用品",src:"assets/img/cup/cup4.jpg",price:"￥223.00"},
    {sid:5,stitle:"BORN",spec:"情侣*休闲",src:"assets/img/clothes/cloth11.jpg",price:"￥689.00"},
    {sid:6,stitle:"BORN",spec:"情侣*休闲",src:"assets/img/clothes/cloth4.jpg",price:"￥589.00"},
    {sid:7,stitle:"BORN",spec:"情侣*休闲",src:"assets/img/shoes/shoe1.jpg",price:"￥189.00"},
    {sid:8,stitle:"BORN",spec:"情侣*休闲",src:"assets/img/clothes/boy1.jpg",price:"￥189.00"},
    {sid:9,stitle:"想去",spec:"情侣*休闲",src:"assets/img/clothes/boy3.jpg",price:"￥189.00"},
    {sid:10,stitle:"想去",spec:"情侣*休闲",src:"assets/img/clothes/boy6.jpg",price:"￥300.00"},
    
    {sid:11,stitle:"想去",spec:"情侣*休闲",src:"assets/img/other/other1.jpg",price:"￥120.00"},
    {sid:12,stitle:"想去",spec:"情侣*休闲",src:"assets/img/other/other5.jpg",price:"￥220.00"},
    {sid:13,stitle:"想去",spec:"情侣*休闲",src:"assets/img/other/other9.jpg",price:"￥1320.00"},
    {sid:14,stitle:"想去",spec:"情侣*休闲",src:"assets/img/other/other12.jpg",price:"￥1620.00"},
    
    
    
    
  ];
  constructor( 
    private router: Router,
    private route:ActivatedRoute
      ) { }

  ngOnInit() {
    
  }
  yidong($event) {
    let $tar = $($event.target);
    let X = $event.touches[0].pageX; //开始的位置
    console.log(X);
    $tar.bind("touchend",(e)=>{
      let x = e.changedTouches[0].pageX; // 结束
      console.log(x);
      if(X< x) {
          this.router.navigate(['home']);
      }         
    })
  }

}
