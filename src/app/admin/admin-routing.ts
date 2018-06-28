import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AddSpeakerComponent } from './manage-speakers/add-speaker.component';
import { AddEventComponent } from './manage-events/add-event.component';
import { SpeakerListResolve } from './manage-speakers/speaker-list.resolve';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'speaker/create',
                component: AddSpeakerComponent
            },
            {
                path: 'event/create',
                component: AddEventComponent,
                resolve: {
                    speakers: SpeakerListResolve
                }
            }
        ]
    }

];

export const AdminRoutingModule = RouterModule.forChild(routes);
