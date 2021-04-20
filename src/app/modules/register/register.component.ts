import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../models/register.models'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      'username': [this.user.username, [
        Validators.required,
        Validators.maxLength(20)
      ]],
      'email': [this.user.email,[
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }
  onRegisterSubmit(){
    console.log(this.user.username + ' ' + this.user.password + ' ' + this.user.email);
  }
}
