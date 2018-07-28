import { RouterModule, Routes } from '@angular/router';

import { OrganizerComponent } from './organizer.component';
import { AddEventComponent } from './manage-events/add-event.component';
import { RequestComponent } from './manage-request/request.component';
import { RequestListResolve } from './manage-request/request-list.resolve';


const routes: Routes = [
    {
        path: 'organizer',
        component: OrganizerComponent,
        children: [
            {
                path: 'event/create',
                component: AddEventComponent
            },
            {
                path: 'requests',
                component: RequestListResolve,
                resolve: {
                    requests: RequestListResolve
                }
            }
        ]
    }

];

export const OrganzierRoutingModule = RouterModule.forChild(routes);
