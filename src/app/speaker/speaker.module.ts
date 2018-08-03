
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

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
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';
import { SpeakerRoutingModule } from './speaker-routing';
import { MyEventComponent } from './myEvents/myEvents.component';
import { SpeakerComponent } from './speaker.component';
import { SpeakerResource } from './speaker.resource';
import { SpeakerService } from './speaker.service';
import { MyEventResolve } from './resolve/myEvent.resolve';
import { EventRequestComponent } from './events/event-request.component';
import { CreateRequestComponent } from './requests/create-request.component';
@NgModule({
    imports: [
        FormsModule,
        RouterModule,
        CommonModule,
        ModalModule.forRoot(),
        ReactiveFormsModule,
        SpeakerRoutingModule,
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
        MatTableModule,
        CdkTableModule,
        MatPaginatorModule,
        MatSelectModule
    ],
    declarations: [
        MyEventComponent,
        SpeakerComponent,
        EventRequestComponent,
        CreateRequestComponent
    ],
    providers: [SpeakerResource, SpeakerService, MyEventResolve],
    exports: []

})
export class SpeakerModule { }
