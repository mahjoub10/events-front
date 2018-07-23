
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Event } from '../shared/models/event';
import { SpeakerResource } from './speaker.resource';

@Injectable()
export class SpeakerService {

    constructor(private resource: SpeakerResource) { }

    /**
     * Get my event list
     *
     */
    public getMyEventList(): Observable<Event[]> {

        return this.resource.getMyEventList();
    }

}
