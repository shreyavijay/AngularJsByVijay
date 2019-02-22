import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.css']
})
export class VerticalNavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateTo(path: string): void {
    switch(path) {
      case 'candidatedirectory':
      this.route.navigateByUrl('/' + path);
      break;
    }

  }


}
