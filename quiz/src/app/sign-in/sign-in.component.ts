import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  activateModal: Boolean;
  invalidCredentials: Boolean = false;
  @Output() closeSignInModal = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder,
              private route: Router,
              public loginSrvc: LoginService) { }

  userSignInForm = this.fb.group({
    userName: ['',Validators.required],
    password: ['',Validators.required]      
  });
  
  ngOnInit() {
    this.activateModal = true;
  }

  closeModal(): void {
    this.activateModal = false;
    this.closeSignInModal.emit(true);
  }

  onSubmit(): void {
    if(this.loginSrvc.signIn(this.userSignInForm.value.userName,
      this.userSignInForm.value.password,false)) {
        
        this.closeModal();
        this.route.navigateByUrl('/viewtests');
    } else {
      this.invalidCredentials = true;
    }
  }

}
