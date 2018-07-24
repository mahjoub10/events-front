
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
    MatSelectModule
} from '@angular/material';

import { AdminRoutingModule } from './admin-routing';
import { AdminComponent } from './admin.component';
import { AddSpeakerComponent } from './manage-speakers/add-speaker.component';
import { SpeakerResource } from './manage-speakers/speaker.resource';
import { SpeakerService } from './manage-speakers/speaker.service';
import { AddEventComponent } from './manage-events/add-event.component';
import { EventResource } from './manage-events/event.resource';
import { EventService } from './manage-events/event.service';
import { SpeakerListResolve } from './manage-speakers/speaker-list.resolve';
import { AddOrganizerComponent } from './manage-organizer/add-organizer.component';
import { OrganizerResource } from './manage-organizer/organizer.resource';
import { OrganizerService } from './manage-organizer/organizer.service';
import { OrganizerListResolve } from './manage-organizer/organizer-list.resolve';
import { OrganizerListComponent } from './manage-organizer/list-organizer.component';

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
        AdminRoutingModule,
        TypeaheadModule.forRoot()

    ],
    declarations: [
        AdminComponent,
        AddSpeakerComponent,
        AddEventComponent,
        AddOrganizerComponent,
        OrganizerListComponent
    ],
    providers: [
        SpeakerService,
        SpeakerResource,
        EventService,
        EventResource,
        SpeakerListResolve,
        OrganizerResource,
        OrganizerService,
        OrganizerListResolve
    ],
    exports: []
})
export class AdminModule {

}
