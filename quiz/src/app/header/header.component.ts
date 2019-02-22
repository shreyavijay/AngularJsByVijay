import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  signUp: Boolean = false;
  signIn: Boolean = false;

  constructor(public loginSrvc:LoginService) { }

  ngOnInit() {
  }

  signUpFn(flag:Boolean) {
    this.signUp = flag;
  }
  onCloseSignInModal(close: Boolean) {
    this.signIn = !close;
  }

  oncloseSignUpModal(close: boolean) {
    this.signUp = !close;
  }  

}
 