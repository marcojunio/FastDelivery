import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { isAuthenticated } from "@pages/auth/store/auth.selectors";
import { AppState } from "@store/app.state";
import { map, Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class AppGuard implements CanActivate {

    constructor(private store: Store<AppState>, private router: Router) { }

    canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.store.select(isAuthenticated)
            .pipe(
                map((authenticated) => {
                    if (!authenticated) {
                        return this.router.createUrlTree(['/login']);
                    }

                    return true;
                })
            );
    }
}