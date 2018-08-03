import { RouterModule, Routes } from '@angular/router';

import { MyEventComponent } from './myEvents/myEvents.component';
import { SpeakerComponent } from './speaker.component';
import { MyEventResolve } from './resolve/myEvent.resolve';
import { EventRequestComponent } from './events/event-request.component';
import { EventListResolve } from '../events/resolve/event-list.resolve';
import { CreateRequestComponent } from './requests/create-request.component';
import { EventResolve } from '../events/resolve/event.resolve';


const routes: Routes = [
    {
        path: 'speaker',
        component: SpeakerComponent,
        children: [
            {
                path: 'myEvents',
                component: MyEventComponent,
                resolve: {
                    myEvents: MyEventResolve
                }
            },
            {
                path: 'events/requests',
                component: EventRequestComponent,
                resolve: {
                    events: EventListResolve
                }
            },
            {
                path: 'event/request/:id/create',
                component: CreateRequestComponent,
                resolve: {
                    event: EventResolve
                }
            }
        ]
    }

];

export const SpeakerRoutingModule = RouterModule.forChild(routes);
