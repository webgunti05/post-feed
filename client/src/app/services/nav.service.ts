import { Injectable } from '@angular/core';

@Injectable()

export class NavService{
    
    private navList : Array<any>;

    constructor(){
        this.navList = ["Home", "Feedlist"];
    }

    getNavList(){
        return this.navList;
    }
}