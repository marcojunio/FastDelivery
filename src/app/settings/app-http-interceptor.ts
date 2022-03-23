import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getToken } from "@pages/auth/store/auth.selectors";
import { AppState } from "@store/app.state";
import { exhaustMap, Observable, take } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppHttpInterceptor implements HttpInterceptor {

    constructor(private store: Store<AppState>) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store.select(getToken).pipe(
            take(1),
            exhaustMap((token) => {
                if (!token) {
                    return next.handle(req);
                }

                let modifiedReq = req.clone({
                    params: req.params.append('Authorization', token),
                });

                return next.handle(modifiedReq);
            })
        );
    }

}