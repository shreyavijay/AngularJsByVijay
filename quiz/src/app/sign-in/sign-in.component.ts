import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }
  activateModal: Boolean;
  ngOnInit() {
    this.activateModal = true;
  }

  closeModal(): void {
    this.activateModal = false;
  }

  signIn(): void {
    this.closeModal();
    // window.open('Registration.html')
  }

}
