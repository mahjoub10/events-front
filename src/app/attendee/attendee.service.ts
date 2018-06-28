
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Attendee } from '../shared/models/attendee';
import { AttendeeResource } from './attendee.resource';

@Injectable()
export class AttendeeService {

    constructor(private resource: AttendeeResource) { }

    /**
     * Send attendee subscription.
     *
     * @param attendee new attendee .
     */
    public submitSubscription(attendee: Attendee): Observable<any> {

        return this.resource.subscribe(attendee);
    }

    /**
     * Subscribe to event.
     *
     */
    public subscribeToEvent(idEvent: number): Observable<any> {

        return this.resource.subscribeToEvent(idEvent);
    }

    /**
     * Unsubscribe to event.
     *
     */
    public unSubscribeToEvent(idEvent: number): Observable<any> {

        return this.resource.unSubscribeToEvent(idEvent);
    }

}
