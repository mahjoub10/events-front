import { RouterModule, Routes } from '@angular/router';

import { OrganizerComponent } from './organizer.component';
import { AddEventComponent } from './manage-events/add-event.component';


const routes: Routes = [
    {
        path: 'organizer',
        component: OrganizerComponent,
        children: [
            {
                path: 'event/create',
                component: AddEventComponent
            }
        ]
    }

];

export const OrganzierRoutingModule = RouterModule.forChild(routes);
