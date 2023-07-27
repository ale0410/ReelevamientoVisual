import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {userDb} from '../shared/user.inteface';
import { AuthService } from '../services/auth.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  login = userDb;
  pass!: string;
  submitted = false;
  spinner = false;
  error = '';

  constructor(public auth: AuthService, public router: Router) {}

  /** Loguea al usuario con NgForm y si es valido llama a la funcion signIn de AuthService para que valide, y va a la pagina home*/
  onLogin(form: NgForm) {
     this.submitted = true;
     if (form.valid) {
       this.spinner = true;
       this.auth.signIn(form.form.value.email, form.form.value.password)
         .then(() => {
              this.router.navigateByUrl('/home');
         })
         .catch((error) => (this.error = error))
         .finally(() => {
           this.spinner = false;
         });
     }
    
  }

  admin() {
    this.login.email = 'admin@admin.com';
    this.pass = '111111';
  }

  invitado() {
    this.login.email = 'invitado@invitado.com';
    this.pass = '222222';
  }

  usuario() {
    this.login.email = 'usuario@usuario.com';
    this.pass = '333333';
  }

  anonimo() {
    this.login.email = 'anonimo@anonimo.com';
    this.pass = '444444';
  }

  tester() {
    this.login.email = 'tester@tester.com';
    this.pass = '555555'; 
  }


}
