
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import {
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatRadioModule,
    MatChipsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
} from '@angular/material';

import { OrganzierRoutingModule } from './organizer-routing';
import { OrganizerComponent } from './organizer.component';
import { AddEventComponent } from './manage-events/add-event.component';
import { EventResource } from './manage-events/event.resource';
import { EventService } from './manage-events/event.service';
import { RequestResource } from './manage-request/request.resource';
import { RequestService } from './manage-request/request.service';
import { RequestListResolve } from './manage-request/request-list.resolve';

@NgModule({
    imports: [
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatButtonModule,
        MatRadioModule,
        MatChipsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatTabsModule,
        MatSelectModule,
        FormsModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        OrganzierRoutingModule,
        MatTableModule,
        TypeaheadModule.forRoot()

    ],
    declarations: [
        OrganizerComponent,
        AddEventComponent,
    ],
    providers: [
        EventService,
        EventResource,
        RequestResource,
        RequestService,
        RequestListResolve
    ],
    exports: [RequestListResolve]
})
export class OrganizerModule {

}
