import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class AccountService {

    private url = environment.api;

    constructor(
        private http: Http,
        private localStorageService: LocalStorageService) { }

    // GET CURRENT USER
    get(): Observable<User> {
        const u = this.url + '/api/user/account';
        return this.http.get(u)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }



    // THROW ERROR
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


}
