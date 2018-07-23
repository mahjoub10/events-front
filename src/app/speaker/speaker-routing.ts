import { RouterModule, Routes } from '@angular/router';

import { MyEventComponent } from './myEvents/myEvents.component';
import { SpeakerComponent } from './speaker.component';
import { MyEventResolve } from './resolve/myEvent.resolve';

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
            }
        ]
    }

];

export const SpeakerRoutingModule = RouterModule.forChild(routes);
