import { Injectable } from '@angular/core';
import {  FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public palabraPattern: string = '([a-zA-z)]';
  public numero : string= '[0-9]';

  constructor() { }

  noPuedeSerStrider(control:FormControl): ValidationErrors| null{
    const valor = control.value?.trim().toLowerCase();
      if(valor==='strider'){
        return{
          noStrider: true
        }
      }
      return null
  }
}
