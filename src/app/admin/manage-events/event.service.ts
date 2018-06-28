
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { EventResource } from './event.resource';
import { Event } from '../../shared/models/event';

@Injectable()
export class EventService {

    constructor(private resource: EventResource) { }

    /**
     * Create new speaker.
     */
    public createEvent(event: Event): Observable<any> {

        return this.resource.createEvent(event);
    }

}
