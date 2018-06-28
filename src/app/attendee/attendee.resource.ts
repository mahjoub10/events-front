import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import { Attendee } from '../shared/models/attendee';

@Injectable()
export class AttendeeResource {

    private url = environment.api;

    constructor(private http: Http) { }

    /**
     * Send attendee subscription.
     *
     * @param attendee  new attendee
     */
    subscribe(attendee: Attendee): Observable<any> {
        const url = this.url + '/api/attendee/subscribe';
        const body = JSON.stringify(attendee);
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
     * Send attendee subscription.
     *
     * @param attendee  new attendee
     */
    subscribeToEvent(idEvent: number): Observable<any> {
        const url = this.url + '/api/attendee/event/subscribe';
        const option = new RequestOptions();
        const param = new URLSearchParams();
        param.set('idEvent', String(idEvent));
        option.params = param;

        return this.http
            .get(url, option)
            .map((res: Response) => res.json())
            .catch(this.handleError);

    }

    /**
     * Send attendee subscription.
     *
     * @param attendee  new attendee
     */
    unSubscribeToEvent(idEvent: number): Observable<any> {
        const url = this.url + '/api/attendee/event/unSubscribe';
        const option = new RequestOptions();
        const param = new URLSearchParams();
        param.set('idEvent', String(idEvent));
        option.params = param;
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
