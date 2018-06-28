
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventsComponent } from '../events.component';
import { EventService } from '../event.service';
import { Event } from '../../shared/models/event';
@Injectable()
export class EventResolve implements Resolve<Event> {

    constructor(private eventService: EventService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id') ;
        return this.eventService.getEventDetail(Number(id));
    }

}