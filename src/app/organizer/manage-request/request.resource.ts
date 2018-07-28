import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../../environments/environment';
import { Request } from '../../shared/models/request';

@Injectable()
export class RequestResource {

    private url = environment.api;

    constructor(private http: Http) { }

    /**
     * Get request list.
     *
     */
    getRequestList(): Observable<Request[]> {
        const url = this.url + '/api/requests/all';

        return this.http
            .get(url)
            .map((res: Response) => res.json())
            .catch(this.handleError);

    }



    // Handle server errors
    private handleError(error: Response | any) {
        let err: {};
        if (error instanceof Response) {
            const body = error.json() || '';
            err = body.error || body;
        } else {
            err = {};
        }
        console.error(err);
        return Promise.reject(err);
    }

}
