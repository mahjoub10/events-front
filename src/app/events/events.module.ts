
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';

import { EventsComponent } from './events.component';
import { EventsListComponent } from './list/events-list.component';
import { EventDetailComponent } from './detail/event-detail.component';

import { EventService } from './event.service';
import { EventResource } from './event.resource';
import { EventListResolve } from './resolve/event-list.resolve';
import { EventResolve } from './resolve/event.resolve';


@NgModule({
    imports: [
        FormsModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        EventsRoutingModule,
        MatIconModule,
        SharedModule
    ],
    declarations: [
        EventsComponent,
        EventsListComponent,
        EventDetailComponent
    ],
    providers: [
        EventResource,
        EventService,
        EventListResolve,
        EventResolve
    ],
    exports: []

})
export class EventsModule { }
