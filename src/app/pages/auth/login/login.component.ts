import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ICommand } from '@contracts/ICommand';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuild: FormBuilder, @Inject(AuthService) private readonly authService: AuthService) { }

  formLogin = this.formBuild.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });


  ngOnInit(): void {
  }

  onSubmit() {
    const value = this.formLogin.value as ICommand;
    this.authService.auth(value);
  }

  get login() {
    return this.formLogin.get('login');
  }

  get password() {
    return this.formLogin.get('password');
  }
}
