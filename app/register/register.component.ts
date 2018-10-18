import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      address: new FormControl('')
    });
  }

  public validateControl(controlName: string) {
    if (this.registerForm.controls[controlName].invalid && this.registerForm.controls[controlName].touched)
      return true;
    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.registerForm.controls[controlName].hasError(errorName))
      return true;
    return false;
  }


}
