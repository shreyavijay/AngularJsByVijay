import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {User} from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User ;
  activateModal: Boolean;
  @Output() closeSignUpModal = new EventEmitter<boolean>();
  // userService: UserService;
  // route: Router;
  constructor(private userService: UserService,
              private loginSrvc: LoginService,
              private route: Router) { }

  ngOnInit() {
    this.user = this.userService.getNewUser();
    this.activateModal = true;
  }

  closeModal(): void {
    this.activateModal = false;
    this.closeSignUpModal.emit(true);
  }

  onSubmit(): void {
    console.log('Printing Signup User ', JSON.stringify(this.user));
    this.userService.addUser(this.user);
    this.loginSrvc.signIn(this.user.companyEmail, this.user.password, false);
    this.closeModal();
    this.route.navigateByUrl('/register/' + this.user.companyEmail);
    // window.open('Registration.html')
  }

}
