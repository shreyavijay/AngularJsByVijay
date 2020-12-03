import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { LoginService } from '../login.service';
import { MenubarService} from '../menubar.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  menubarFlag: boolean = true;
  signUp: Boolean = false;
  signIn: Boolean = false;
  developerSignIn: Boolean = false;
  displayNavPanel: boolean = true;
  subscription: Subscription;
  @Output() toggleNavPanel = new EventEmitter<boolean>();
  constructor(public loginSrvc:LoginService,
              private menubarSvc:MenubarService,
              private cdr: ChangeDetectorRef) { 
    
    this.subscription = this.menubarSvc.displayNavPanel$.subscribe(
        displayNavPanel => {
          console.log('Confirm Subscription in Header');
          if(!displayNavPanel) {
            //Hide NavBar Panel on MouseDown event
            this.toggleDisplayOfNavPanel(); 
          }
          
        }
      );

    }

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
  
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
 