import { Component, OnInit } from '@angular/core';

import {User} from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User = new User();
  activateModal: Boolean;
  constructor() { }

  ngOnInit() {
    this.activateModal = true;
  }

  closeModal(): void {
    this.activateModal = false;
  }

  onSubmit(): void {
    console.log('Printing Signup User ', JSON.stringify(this.user));
    this.closeModal();
    // window.open('Registration.html')
  }

}
