import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare let window: any;


@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getdl(){
    var u = $("#namevalue").val();
    var p = $("#upwdvalue").val();
    
  }
}
