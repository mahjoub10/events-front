import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { OrganizerService } from './organizer.service';
import { Organizer } from '../../shared/models/organizer';

@Injectable()
export class OrganizerListResolve implements Resolve<Organizer[]> {

    constructor(private organizerService: OrganizerService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.organizerService.getOrganizerList();
    }
}
