import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.css']
})
export class VerticalNavbarComponent implements OnInit {
  extras: NavigationExtras = {skipLocationChange: true};
  constructor(private route: Router) { }
  ngOnInit() {
  }

  navigateTo(path: string): void {
    switch(path) {
      case 'candidatedirectory':
      this.route.navigate([path], {skipLocationChange: true});
      break;
    }

  }
  ngOnDestroy() {
  }


}
