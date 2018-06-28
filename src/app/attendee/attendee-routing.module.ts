import { RouterModule, Routes } from '@angular/router';

import { AttendeeSubscriptionComponent } from './subscription/attendee-subscription.component';
import { AttendeeComponent } from './attendee.component';

const routes: Routes = [
    {
        path: 'attendee',
        component: AttendeeComponent,
        children: [
            {
                path: 'subscription',
                component: AttendeeSubscriptionComponent
            }
        ]
    }

];

export const AttendeeRoutingModule = RouterModule.forChild(routes);
