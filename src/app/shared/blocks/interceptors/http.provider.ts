import { XHRBackend, Http, RequestOptions } from '@angular/http';
import { AuthInterceptor } from './auth.interceptor';
import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

/**
 * Custom HTTP factory to include the auth interceptor.
 */
export function interceptableFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, injector: Injector,
    localStorageService: LocalStorageService, sessionStorage: SessionStorageService, router: Router): Http {

    return new AuthInterceptor(router, localStorageService, sessionStorage, xhrBackend, requestOptions);
}

export function customHttpProvider() {
    return {
        provide: Http,
        useFactory: interceptableFactory,
        deps: [
            XHRBackend,
            RequestOptions,
            Injector,
            LocalStorageService,
            SessionStorageService,
            Router
        ]
    };
}
