import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import { Event } from '../shared/models/event';

@Injectable()
export class EventResource {

    private url = environment.api;

    constructor(private http: Http) { }

    /**
     * Get event list.
     *
     */
    getEventList(): Observable<Event[]> {
        const url = this.url + '/api/events/all';
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

    getEventDetail(eventId: number): Observable<Event> {
        const url = this.url + '/api/events/get';
        const option = new RequestOptions();
        const param = new URLSearchParams();
        param.set('eventId', String(eventId));
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
