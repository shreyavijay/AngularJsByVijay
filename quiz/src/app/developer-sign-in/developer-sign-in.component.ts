import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-developer-sign-in',
  templateUrl: './developer-sign-in.component.html',
  styleUrls: ['./developer-sign-in.component.css']
})
export class DeveloperSignInComponent implements OnInit {
  activateModal: Boolean;
  invalidCredentials: Boolean = false;
  @Output() closeDeveloprSignInModal = new EventEmitter<Boolean>();

  constructor(private fb: FormBuilder,
    private route: Router,
    public loginSrvc: LoginService) { }

  developerSignInForm = this.fb.group({
    userName: ['',Validators.required],
    mobile: ['',Validators.required]
  });

  ngOnInit() {
    this.activateModal = true;
  }

  closeModal(): void {
    this.activateModal = false;
    this.closeDeveloprSignInModal.emit(true);
  }

  onSubmit(): void {
    if(this.loginSrvc.signIn(this.developerSignInForm.value.userName,
      this.developerSignInForm.value.mobile,true)) {
        console.log('Authentication Success');
        this.closeModal();
        this.route.navigateByUrl('/devdisclosure');
    } else {
      this.invalidCredentials = true;
      console.log('Authentication Failure');
    }    
  }
}
