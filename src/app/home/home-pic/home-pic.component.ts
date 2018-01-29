import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-pic',
  templateUrl: './home-pic.component.html',
  styleUrls: ['./home-pic.component.css']
})
export class HomePicComponent implements OnInit{
  picId: number;
  index: boolean = true;
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
  picList: SwiperOptions = {
    pagination : '.swiper-pagination',
    paginationElement : 'li',
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (result:any) => {
        console.log(result.id);
        this.picId = result.id;
        console.log(this.picId);
      }
    )

  }
  yidong($event) {
      let $tar = $($event.target);
      let X = $event.touches[0].pageX; // 开始
      let i = $tar.parent().parent().index();
      if(i==this.picsList[this.picId].length-1){
        $tar.bind("touchend",(e)=>{
          let x = e.changedTouches[0].pageX; // 结束
          if(X - x > 50) {
              this.router.navigate(['home-shopping']);
          }
        })
      }
      
  }


}
