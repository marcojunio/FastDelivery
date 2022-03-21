import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { createEffect } from '@ngrx/effects';
import { AuthService } from "@services/auth.service";
import { catchError, exhaustMap, map } from "rxjs";
import { login, loginSuccess } from "./auth.actions";


@Injectable()
export class AuthEffects {

    constructor(private authService: AuthService, private actions$: Actions) {

    }

    login = createEffect(() => this.actions$.pipe(
        ofType(login),
        exhaustMap(action => {
            return this.authService.auth({ login: action.login, password: action.password })
                .pipe(
                    map((result: any) => {
                        return loginSuccess({ token: result.token })
                    }),
                )
        }),
        catchError((_, caught) => {
            return caught;
        })
    ));
}