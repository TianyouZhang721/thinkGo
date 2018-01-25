import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-she-say-list',
  templateUrl: './she-say-list.component.html',
  styleUrls: ['./she-say-list.component.css']
})
export class SheSayListComponent implements OnInit {
  tabs: any = [
    {name:"发现"},
    {name:"关注"}
  ]

  constructor() { }

  ngOnInit() {
    console.log(this.tabs);
  }

}
