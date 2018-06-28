import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventsListComponent } from './list/events-list.component';
import { EventListResolve } from './resolve/event-list.resolve';
import { EventResolve } from './resolve/event.resolve';
import { EventDetailComponent } from './detail/event-detail.component'


const routes: Routes = [
    {
        path: 'events',
        component: EventsComponent,
        children: [
            {
                path: 'list',
                component: EventsListComponent,
                resolve: {
                    events: EventListResolve
                }
            },
            {
                path: 'detail/:id',
                component: EventDetailComponent,
                resolve: {
                    event: EventResolve
                }
            }
        ]
    }

];

export const EventsRoutingModule = RouterModule.forChild(routes);
