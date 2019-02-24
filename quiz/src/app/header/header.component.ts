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
  developerSignIn: Boolean = false;

  constructor(public loginSrvc:LoginService) { }

  ngOnInit() {
  }

  signUpFn(flag:Boolean) {
    this.signUp = flag;
  }

  onCloseModal(close: boolean) {
    this.signIn = !close;
    this.developerSignIn = !close;
    this.signUp = !close;
  }

}
 