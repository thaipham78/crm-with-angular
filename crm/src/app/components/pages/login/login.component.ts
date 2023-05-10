import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {};

 loginForm = this.fb.group({
    name: [''],
    password: [''],
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
