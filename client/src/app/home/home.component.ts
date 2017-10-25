import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeBg : String;
  constructor() { 
    this.homeBg = "http://www.mytechthinking.in/wp-content/uploads/2017/08/Angular-4.png";
  }

  ngOnInit() {
  }

}
