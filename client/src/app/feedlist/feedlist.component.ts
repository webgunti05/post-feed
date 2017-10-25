import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'Feedlist',
  templateUrl: './feedlist.component.html',
  styleUrls: ['./feedlist.component.css']
})
export class FeedlistComponent {


    items: Array<Item>;

        constructor(){
            this.items = [];
        }
    addItem(url,name,message){
        const item = new Item(url,name,message);
        this.items.push(item);
        url.value = '';
        name.value = '';
        message.value = '';
    }

  
}

