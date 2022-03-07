import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ICommand } from '@contracts/ICommand';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private formBuild: FormBuilder, @Inject(AuthService) private readonly authService: AuthService) { }

  formRegister = this.formBuild.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
    nome: ['', Validators.required]
  });


  ngOnInit(): void {
  }

  onSubmit() {
    const value = this.formRegister.value as ICommand;
    this.authService.create(value);
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
