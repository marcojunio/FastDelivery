import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType } from "@ngrx/effects";
import { createEffect } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { AuthService } from "@services/auth.service";
import { showLoader } from "@shared/store/shared.actions";
import { AppState } from "@store/app.state";
import { catchError, exhaustMap, map, tap } from "rxjs";
import { login, loginSuccess, createUser, createUserSuccess, logoutUser } from "./auth.actions";


@Injectable()
export class AuthEffects {

    constructor(private store: Store<AppState>, private authService: AuthService, private actions$: Actions, private router: Router) {

    }

    login = createEffect(() => this.actions$.pipe(
        ofType(login),
        exhaustMap(action => {
            this.store.dispatch(showLoader({ showLoader: true }));

            return this.authService.auth({ login: action.login, password: action.password })
                .pipe(
                    map((result: any) => {
                        return loginSuccess({ token: result.data.token, name: result.data.name })
                    }),
                )
        }),
        catchError((_, caught) => {
            this.store.dispatch(showLoader({ showLoader: false }));
            return caught;
        })
    ));

    createUser = createEffect(() => this.actions$.pipe(
        ofType(createUser),
        exhaustMap((action) => {
            this.store.dispatch(showLoader({ showLoader: true }));

            return this.authService.create({ nome: action.nome, password: action.password, login: action.login }).pipe(
                map((result: any) => {
                    return createUserSuccess({ id: result.data.id });
                })
            )
        }),
        catchError((_, caught) => {
            this.store.dispatch(showLoader({ showLoader: false }));
            return caught
        })
    ))

    createUserSuccess = createEffect(() => this.actions$.pipe(
        ofType(createUserSuccess),
        tap((action) => {
            if (action.id) {
                this.router.navigate(['/login']);
                this.store.dispatch(showLoader({ showLoader: false }));
            }
        })
    ), { dispatch: false })

    loginSuccess = createEffect(() => this.actions$.pipe(
        ofType(loginSuccess),
        tap((action) => {
            if (action.token) {
                this.authService.createStorage({ token: action.token, name: action.name });
                this.router.createUrlTree(['main']);
                this.store.dispatch(showLoader({ showLoader: false }));
            }

        })
    ), { dispatch: false })

    logout = createEffect(() => this.actions$.pipe(
        ofType(logoutUser),
        map(() => {
            this.authService.signout();
        })
    ), { dispatch: false })
}