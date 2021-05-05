import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/models/login.models';
import { HttpClient } from '@angular/common/http'
import { environment } from './../../../environments/environment'
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	user: LoginModel = new LoginModel();
	loginForm: FormGroup;
	apiUrl: string = environment.apiUrl;
	hide = true;

	constructor(private formBuilder: FormBuilder, private http: HttpClient, private _router: Router, private userService: UserService) { }

	ngOnInit(): void {
		// verification des champs du form
		this.loginForm = this.formBuilder.group({
			'username': [this.user.username, [
				Validators.required,
				Validators.maxLength(20)
			]],
			'password': [this.user.password, [
				Validators.required,
				Validators.minLength(6),
				Validators.maxLength(30)
			]]
		});
	}
	

	userList = []


	//retourne faux si l'utilisateur n'existe pas, vrai sinon.
	userExist(name){
		for(let i in this.userList){
		//console.log(userList[i].username);
		if(this.userList[i].username == name){
			return true;
		}
		}
		return false;
	};

	onLoginSubmit(){
		this.http.post(this.apiUrl + 'login/userpsw', this.loginForm.value)
			.subscribe((response)=>{
				if(response){
					let current_usrname = document.getElementById('aled')[0].value;
					this.userService.setUsername(current_usrname);
					this._router.navigate([""]);
				}
				else{
					console.log("Nom d'utilisateur / mot de passe inexistant.")
				}
			})
	}
	

	//FAIRE UN LABEL AVEC L ID ERREURE !!!
	displayErreure(erreure){
		let erreureDiv = document.getElementById('erreure');
		if (erreure == 'ok'){
			erreureDiv.style.display = 'none';
		}else{
			console.log('erreur');
			erreureDiv.style.display = 'inline-block';
			erreureDiv.innerHTML = "Erreur : " + erreure;
		}
	}
}