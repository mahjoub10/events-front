import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../../environments/environment';
import { Speaker } from '../../shared/models/speaker';

@Injectable()
export class SpeakerResource {

    private url = environment.api;

    constructor(private http: Http) { }

    /**
     * Send speaker creation.
     *
     * @param attendee  new speaker
     */
    createSpeaker(speaker: Speaker): Observable<any> {
        const url = this.url + '/api/speaker/create';
        const body = JSON.stringify(speaker);
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
     * Get speaker list .
     */
    getSpeakerList(): Observable<Speaker[]> {
        const url = this.url + '/api/admin/speaker/list';
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
