import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designer-list',
  templateUrl: './designer-list.component.html',
  styleUrls: ['./designer-list.component.css']
})
export class DesignerListComponent implements OnInit {
  designerList : any = [
    {did:1,title:"箱包",src:"assets/img/shejishi/shejishi06.jpg"},
    {did:2,title:"家具",src:"assets/img/shejishi/shejishi02.jpg"},
    {did:3,title:"茶具",src:"assets/img/shejishi/shejishi01.jpg"},
    {did:4,title:"女装",src:"assets/img/shejishi/shejishi02.jpg"},
    
  ]
title:any;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  jumprouter (index){
    this.title = this.designerList[index].title;
    console.log(index);
    this.router.navigate(["designers/"+this.title]);
  }
}
