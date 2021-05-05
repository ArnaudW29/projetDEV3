import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/models/login.models';
import { HttpClient } from '@angular/common/http'
import { environment } from './../../../environments/environment'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	user: LoginModel = new LoginModel();
	loginForm: FormGroup;
	apiUrl: string = environment.apiUrl;

	constructor(private formBuilder: FormBuilder, private http: HttpClient, private _router: Router) { }

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
		let current_usrname;

		this.http.post(this.apiUrl + 'login/userpsw', this.loginForm.value)
			.subscribe((response)=>{
				if(response){
					current_usrname = document.getElementById('aled')[0].value;
					this._router.navigate([""]);
				}
				else{
					console.log('erreur')
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



	/* J aurais fait un truc duu genre avec du mySQL
	function getUserID(name){
		let xhr = new XMLHttpRequest();
		let url = 'getUserID?username=' + name;
		xhr.open('get', url, true);
		xhr.onload = function(){
				userID = xhr.responseText; 
				//console.log("votre id est = " + xhr.responseText); 
				displayFormProd();
				recupererCarnet();
				};
		xhr.send();
	}
	*/
