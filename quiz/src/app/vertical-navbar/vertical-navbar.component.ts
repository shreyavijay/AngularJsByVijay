import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ValueTransformer } from '@angular/compiler/src/util';
import {  ChangeDetectorRef } from '@angular/core';

declare var $: any;
@Component({
  
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.css']
})
export class VerticalNavbarComponent implements OnInit {
  varDisplayPanel: boolean = true;
  menubarFlag: boolean = true;
  extras: NavigationExtras = {skipLocationChange: true};
  
  constructor(private route: Router,
              private cdr: ChangeDetectorRef,
              private zone: NgZone
              ) { }

  ngOnInit() {
    
  }

  navigateTo(path: string): void {
    this.zone.run(() => {
      this.route.navigate([path], {skipLocationChange: true}).then;
    });    
    
  }

  toggleDisplayOfNavPanel(flag: boolean):void {
    this.varDisplayPanel = flag;
    this.cdr.detectChanges();
    console.log('VerticalNavbarComponent toggleDisplayOfNavPanel ',this.varDisplayPanel);
  }

   ngOnDestroy() {
  }

}
