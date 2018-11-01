import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { EmailValidatorService } from './email-validator.service';
@Directive({
  selector: '[appValidateEmail]',
  providers: [{provide:NG_VALIDATORS, useExisting: ValidateEmailDirective, multi: true}]
})
export class ValidateEmailDirective implements Validator {
  constructor(private emailValidatorSrvc: EmailValidatorService ){}  
  @Input('appValidateEmail') forbiddenEmail: string;
  emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    validate(control: AbstractControl): ValidationErrors | null {
      console.log('wwe');
      return this.emailRegex ? this.emailValidatorSrvc.emailValidator(new RegExp(this.emailRegex.source, 'i'))(control) : null;
    } 

  
}
