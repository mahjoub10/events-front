import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../../environments/environment';
import { Organizer } from '../../shared/models/organizer';

@Injectable()
export class OrganizerResource {

    private url = environment.api;

    constructor(private http: Http) { }

    /**
     * Send organizer creation.
     *
     * @param organizer  new organize
     */
    createOrganizer(organizer: Organizer): Observable<any> {
        const url = this.url + '/api/organizer/create';
        const body = JSON.stringify(organizer);
        const option = new RequestOptions();
        const param = new URLSearchParams();
        const header = new Headers({ 'Content-Type': 'application/json' });

        option.params = param;
        option.headers = header;

        return this.http
            .post(url, body, option)
            .map((res: Response) => res.json())
            .catch(this.handleError);

    }

    /**
     * Get organizer list .
     */
    getOrganizerList(): Observable<Organizer[]> {
        const url = this.url + '/api/organizer/list';
        const option = new RequestOptions();
        const param = new URLSearchParams();
        const header = new Headers({ 'Content-Type': 'application/json' });

        option.params = param;
        option.headers = header;

        return this.http
            .get(url, option)
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
