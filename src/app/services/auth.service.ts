import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { ICommand } from '@contracts/ICommand';

@Injectable({ providedIn: "root" })
export class AuthService {

    constructor(@Inject(HttpClient) private readonly http: HttpClient, @Inject(Router) private readonly router: Router) {

    }


    create = (createUser: ICommand) => this.http.post("https://localhost:5001/api/v1/users", createUser).subscribe((result: any) => {
        console.log(result);
    });

    auth = (authUser: ICommand) => {
        this.http.post("https://localhost:5001/api/v1/users/login", authUser).subscribe((result: any) => {
            if (result.success) {
                localStorage.setItem('token', result.data.token);
                this.router.navigate(['/main']);
            }
            else {
                return;
            }
        })
    }

    signin = () => this.router.navigate(["/login"]);

    signout() {
        localStorage.clear();
        this.signin();
    }

    token = () => localStorage.getItem("token");

    authenticated = (): boolean => this.token() !== null;
}