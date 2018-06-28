import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Token } from '../../models/token';

import { LoginResource } from '../../resources/login.resource';
import { LocalStorageService } from 'ngx-webstorage';
import { Principal } from '../../auth/principal.service';

@Injectable()
export class LoginService {

    constructor(
        private loginResource: LoginResource,
        private router: Router,
        private principal: Principal,
        private localStorageService: LocalStorageService) { }

    /**
     * login WS
     */
    login(username: string, password: string, callback?: any): Observable<Token> {

        return this.loginResource.login(username, password);
    }

    /**
     * Logout
     */
    logout(): Observable<any> {

        return new Observable((observer) => {
            this.localStorageService.clear('authenticationToken');
            observer.complete();
        });
    }

}
