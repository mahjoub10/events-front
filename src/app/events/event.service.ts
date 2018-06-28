
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { EventResource } from './event.resource';
import { Event } from '../shared/models/event';

@Injectable()
export class EventService {

    constructor(private resource: EventResource) { }

    /**
     * Get event list.
     */
    public getEventList(): Observable<Event[]> {

        return this.resource.getEventList();
    }

    /**
     * Get event detail.
     */
    public getEventDetail(eventId: number): Observable<Event> {

        return this.resource.getEventDetail(eventId);
    }

}
