import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navList : Array<any>
  siteName : String;
  constructor(private navSvc: NavService) {
    this.navList = this.navSvc.getNavList();
    this.siteName = "FeedsData";
   }

  ngOnInit() {
  }

}
