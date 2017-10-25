import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  items : Array<any>
  newItem : String;
  constructor() {
    this.items = [];
    this.newItem = "";
   }

   addItem = function(){
     if(this.newItem != ""){
       this.items.push(this.newItem);
       this.newItem = ""
     }
   }

  ngOnInit() {
  }

}
