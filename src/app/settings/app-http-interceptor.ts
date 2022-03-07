import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "@services/auth.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppHttpInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: { Authorization: `Bearer ${this.authService.token()}` }
        });

        return next.handle(req);
    }

}