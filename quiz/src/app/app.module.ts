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
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalNavbarComponent,
    SignInComponent,
    SignUpComponent,
    PhoneValidatorDirective,
    PhoneNumberDirective,
    ValidateEmailDirective,
    UserRegistrationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
 ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
