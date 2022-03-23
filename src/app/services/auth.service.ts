import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { ICommand } from '@contracts/ICommand';

@Injectable({ providedIn: "root" })
export class AuthService {

    constructor(private http: HttpClient, private router: Router) {

    }


    create(createUser: ICommand) {
        return this.http.post("https://localhost:5001/api/v1/users", createUser)
    };

    auth(authUser: ICommand) {
        return this.http.post("https://localhost:5001/api/v1/users/login", authUser);
    }

    signin = () => this.router.navigate(["/login"]);

    signout() {
        localStorage.removeItem('user-person');
        this.signin();
    }

    createStorage(user: { token: string, name: string }) {
        localStorage.setItem('user-person', JSON.stringify(user));
    }
}