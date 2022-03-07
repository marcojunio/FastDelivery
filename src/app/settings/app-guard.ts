import { Injectable } from "@angular/core";
import { CanActivate, UrlTree } from "@angular/router";
import { AuthService } from "@services/auth.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class AppGuard implements CanActivate {

    constructor(private readonly authService: AuthService) { }

    canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log('entra');
        if (this.authService.authenticated()) {
            return true;
        }
        this.authService.signin();
        return false;
    }


}