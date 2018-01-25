import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-designers',
  templateUrl: './designers.component.html',
  styleUrls: ['./designers.component.css']
})
export class DesignersComponent implements OnInit {
  title:any;
  constructor(
    private router:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.params.subscribe(
      (result:any)=>{
          console.log(result);
          this.title=result.title;
      }
    )

  }

}
