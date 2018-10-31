import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VerticalNavbarComponent } from './vertical-navbar/vertical-navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PhoneValidatorDirective } from './phone-validator.directive';
import { PhoneNumberDirective } from './phone-number.directive';
import { ValidateEmailDirective } from './validate-email.directive';
import { EmailValidatorService } from './email-validator.service';

@NgModule({
  declarations: [
    AppComponent,
    VerticalNavbarComponent,
    SignInComponent,
    SignUpComponent,
    PhoneValidatorDirective,
    PhoneNumberDirective,
    ValidateEmailDirective
 ],
  imports: [
    FormsModule,
    BrowserModule
  ],


  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
