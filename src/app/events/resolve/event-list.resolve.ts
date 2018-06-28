import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../../shared/models/event';

@Injectable()
export class EventListResolve implements Resolve<Event[]> {

    constructor(private eventService: EventService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEventList();
    }
}
