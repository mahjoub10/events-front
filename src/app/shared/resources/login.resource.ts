import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../models/user';
import { Token } from '../models/token';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginResource {
    private url = environment.api;
    constructor(
        private http: Http,
        private localStorageService: LocalStorageService) { }


    // LOGIN
    login(username: string, password: string): Observable<Token> {
        const options = new RequestOptions();
        const params = new URLSearchParams();
        params.set('client_secret', 'QzNmrG57pQpt5B9azA01');
        params.set('client_id', 'mMKBdsIgpC9prxBwgd6V');
        params.set('grant_type', 'password');
        params.set('scope', 'read');
        params.set('username', username);
        params.set('password', password);
        options.search = params;
        const url = this.url + '/oauth/token';

        return this.http.
            post(url,{}, options)
            .map((res: Response) => this.authenticateSuccess(res.json()));
    }

    // STORE TOKEN AND REFRESH TOKEN
    authenticateSuccess(token: Token): any {
        this.localStorageService.store('authenticationToken', token.access_token);
        this.localStorageService.store('refreshToken', token.refresh_token);
        return token;
    }

}

