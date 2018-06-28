import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SpeakerService } from './speaker.service';
import { Speaker } from '../../shared/models/speaker';

@Injectable()
export class SpeakerListResolve implements Resolve<Speaker[]> {

    constructor(private speakerService: SpeakerService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.speakerService.getSpeakerList();
    }
}
