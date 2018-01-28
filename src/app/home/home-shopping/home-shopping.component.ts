import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-shopping',
  templateUrl: './home-shopping.component.html',
  styleUrls: ['./home-shopping.component.css']
})
export class HomeShoppingComponent implements OnInit {
    shopIntroList :any = [
      {sid:1,stitle:"两针一线",spec:"情侣鞋*休闲",src:"assets/img/shejishi/shejishi06.jpg",price:"￥189.00"},
      {sid:2,stitle:"BORN",spec:"保温杯情侣",src:"assets/img/shejishi/shejishi04.jpg",price:"￥129.00"},
      {sid:3,stitle:"BORN",spec:"摆件*台历",src:"assets/img/shejishi/shejishi02.jpg",price:"￥389.00"},
      {sid:4,stitle:"BORN",spec:"情侣鞋*红色",src:"assets/img/shejishi/shejishi04.jpg",price:"￥589.00"},
      {sid:5,stitle:"BORN",spec:"情侣卫衣*休闲",src:"assets/img/shejishi/shejishi02.jpg",price:"￥789.00"},
      {sid:6,stitle:"两针一线",spec:"情侣鞋*休闲",src:"assets/img/shejishi/shejishi06.jpg",price:"￥189.00"},
    ];
  constructor() { }

  ngOnInit() {
  }

}
