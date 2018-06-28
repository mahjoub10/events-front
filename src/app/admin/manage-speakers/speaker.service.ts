
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { SpeakerResource } from './speaker.resource';
import { Speaker } from '../../shared/models/speaker';

@Injectable()
export class SpeakerService {

    constructor(private resource: SpeakerResource) { }

    /**
     * Create new speaker.
     * 
     */
    public createSpeaker(speaker: Speaker): Observable<any> {

        return this.resource.createSpeaker(speaker);
    }

    /**
     * Get Speaker List.
     */
    public getSpeakerList(): Observable<Speaker[]> {

        return this.resource.getSpeakerList();
    }

}

