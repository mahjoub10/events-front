
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

// CUSTOM INTERCEPTOR TO INTERCEPT ALL REQUESTS
export class AuthInterceptor extends Http {

    constructor(
        private router: Router,
        private localStorage: LocalStorageService,
        private sessionStorage: SessionStorageService,
        private backend: ConnectionBackend,
        private defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                //
            }, (error: any) => {
                this.onError(error);
            });
    }

    // GET TOKEN FROM LOCAL STORAGE IF FOUND AND PUT IT INTO THE HEADER
    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {


        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }

        const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            // ASSUME THE BACK USES OAUTH
            options.headers.append('Authorization', 'Bearer ' + token);
        }
        return options;
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                //
            }, (error: any) => {
                this.onError(error);
            });
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                //
            }, (error: any) => {
                this.onError(error);
            });
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                //
            }, (error: any) => {
                this.onError(error);
            });
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                //
            }, (error: any) => {
                this.onError(error);
            });
    }

    /**
     * Error handler.
     */
    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    /**
     * onError
     */
    private onError(error: HttpErrorResponse): void {
        if (error.status === 401) {
            this.router.navigate(['/login']);
        }
    }

}
