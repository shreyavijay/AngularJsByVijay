import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menubarFlag: boolean = true;
  signUp: Boolean = false;
  signIn: Boolean = false;
  developerSignIn: Boolean = false;
  displayNavPanel: boolean = true;
  @Output() toggleNavPanel = new EventEmitter<boolean>();
  constructor(public loginSrvc:LoginService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('HeaderComponent ngOnInit',this.menubarFlag);
  }

  signUpFn(flag:Boolean) {
    this.signUp = flag;
  }

  onCloseModal(close: boolean) {
    this.signIn = !close;
    this.developerSignIn = !close;
    this.signUp = !close;
  }

  setMenubarBtnFlag(flag: boolean): void {
    this.menubarFlag = flag;
    this.cdr.detectChanges();
    this.toggleDisplayOfNavPanel();
  }

  toggleDisplayOfNavPanel(): void {
    this.displayNavPanel = this.menubarFlag ? !this.displayNavPanel : true;
    this.toggleNavPanel.emit(this.displayNavPanel);
  }
  


}
 