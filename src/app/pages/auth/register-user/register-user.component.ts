import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app.state';
import { createUser } from '../store/auth.actions';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private formBuild: FormBuilder, private store: Store<AppState>) { }

  formRegister = this.formBuild.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
    nome: ['', Validators.required]
  });


  ngOnInit(): void {
  }

  onSubmit() {
    const value = this.formRegister.value;
    this.store.dispatch(createUser({ login: value.login, nome: value.nome, password: value.password }))
  }

  get login() {
    return this.formRegister.get('login');
  }

  get password() {
    return this.formRegister.get('password');
  }

  get name() {
    return this.formRegister.get('nome');
  }
}
