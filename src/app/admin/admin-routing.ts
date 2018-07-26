import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AddSpeakerComponent } from './manage-speakers/add-speaker.component';
import { SpeakerListResolve } from './manage-speakers/speaker-list.resolve';
import { AddOrganizerComponent } from './manage-organizer/add-organizer.component';
import { OrganizerListResolve } from './manage-organizer/organizer-list.resolve';
import { OrganizerListComponent } from './manage-organizer/list-organizer.component';

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
                path: 'organizer/create',
                component: AddOrganizerComponent
            },
            {
                path: 'organizer/list',
                component: OrganizerListComponent,
                resolve: {
                    organizers: OrganizerListResolve
                }
            }
        ]
    }

];

export const AdminRoutingModule = RouterModule.forChild(routes);
