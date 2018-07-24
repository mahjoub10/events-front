
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { OrganizerResource } from './organizer.resource';
import { Organizer } from '../../shared/models/organizer';

@Injectable()
export class OrganizerService {

    constructor(private resource: OrganizerResource) { }

    /**
     * Create new organizer.
     */
    public createOrganizer(organizer: Organizer): Observable<any> {

        return this.resource.createOrganizer(organizer);
    }

    /**
     * Get Organizer List.
     */
    public getOrganizerList(): Observable<Organizer[]> {

        return this.resource.getOrganizerList();
    }

}

