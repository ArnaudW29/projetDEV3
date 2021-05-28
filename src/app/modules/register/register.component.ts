import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../models/register.models'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;

  apiUrl: string = environment.apiUrl;

  constructor(private formBuilder: FormBuilder, private _router: Router, private http: HttpClient) { }

  ngOnInit(){
    // verification des champs du form
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
    if(this.registerForm.valid){
      this.http.put(this.apiUrl + 'users/sendReg', this.registerForm.value)
        .subscribe((response)=> {
          console.log('response',response);
        })
        this._router.navigate(["/login"]);
    }
  }
}
