import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .catch((err: any, caught) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        console.log('Authentication error');
                       // this.router.navigate(['/shared/login']);
                    }
                    return Observable.throw(err);
                }
            });
    }
}
