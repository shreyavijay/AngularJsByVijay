import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { VerticalNavbarComponent } from './vertical-navbar/vertical-navbar.component';
import { HeaderComponent } from './header/header.component';
declare var $: any;

@Component({
  selector: 'app-root',
  // encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  signUp: Boolean;
  signIn: Boolean;
  @ViewChild(VerticalNavbarComponent)
  private verticaNavbarComponent: VerticalNavbarComponent;

  @ViewChild(HeaderComponent)
  private headerComponent: HeaderComponent;

  constructor() { }

  ngOnInit() {
    const appComponent = this;
    $(document).ready(function () {
      let width:number = $(window).width();
      let menubarDisplayFlag = width <= 768 ? true: false;
      appComponent.setMenuBarFlag(menubarDisplayFlag);
      $(window).resize(function(){
        let txt = "";
        txt += "Document width/height: " + $(document).width();
        txt += "x" + $(document).height() + "\n";
        txt += "Window width/height: " + $(window).width();
        txt += "x" + $(window).height();
        console.log(txt);
        width = $(window).width() + 17;
        let menubarDisplayFlag = width <= 768 ? true: false;
        appComponent.setMenuBarFlag(menubarDisplayFlag);
      });

    });

  }  

  setMenuBarFlag(flag: boolean): void {
    this.headerComponent.setMenubarBtnFlag(flag)
  }  

  toggleDisplayOfNavPanel(flag: boolean): void {
    this.verticaNavbarComponent.toggleDisplayOfNavPanel(flag);
  }

}
