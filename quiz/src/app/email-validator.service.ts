import { Injectable } from '@angular/core';
import { ValidatorFn, FormGroup, FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService {

  constructor() { }

  emailValidator(nameRe: RegExp): ValidatorFn {
    return (control: FormControl): {[key: string]: any} | null => {
      let forbidden = !nameRe.test(control.value);
      console.log('emailValidator');
      return forbidden ? {'forbiddenEmail': {value: control.value}} : null;
    };
  }
}
