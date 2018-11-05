import { Component, OnInit } from '@angular/core';

import {User} from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User ;
  activateModal: Boolean;
  // userService: UserService;
  // route: Router;
  constructor(private userService: UserService,
              private route: Router) { }

  ngOnInit() {
    this.user = this.userService.getNewUser();
    this.activateModal = true;
  }

  closeModal(): void {
    this.activateModal = false;
  }

  onSubmit(): void {
    console.log('Printing Signup User ', JSON.stringify(this.user));
    this.userService.addUser(this.user);
    this.closeModal();
    this.route.navigateByUrl('/register/' + this.user.companyEmail);
    // window.open('Registration.html')
  }

}
