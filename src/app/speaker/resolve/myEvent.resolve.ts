import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SpeakerService } from '../speaker.service';
import { Event } from '../../shared/models/event';

@Injectable()
export class MyEventResolve implements Resolve<Event[]> {

    constructor(private service: SpeakerService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.service.getMyEventList();
    }
}
