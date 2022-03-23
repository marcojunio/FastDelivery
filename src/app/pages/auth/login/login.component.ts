import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app.state';
import { login } from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuild: FormBuilder, private store: Store<AppState>) { }

  formLogin = this.formBuild.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });


  ngOnInit(): void {
  }

  onSubmit() {
    const value = this.formLogin.value;
    this.store.dispatch(login({ password: value.password, login: value.login }))
  }

  get login() {
    return this.formLogin.get('login');
  }

  get password() {
    return this.formLogin.get('password');
  }
}
