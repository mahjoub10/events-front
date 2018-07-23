
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
    MatTabsModule
} from '@angular/material';

import { SpeakerRoutingModule } from './speaker-routing';
import { MyEventComponent } from './myEvents/myEvents.component';
import { SpeakerComponent } from './speaker.component';
import { SpeakerResource } from './speaker.resource';
import { SpeakerService } from './speaker.service';
import { MyEventResolve } from './resolve/myEvent.resolve';
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
        MatTabsModule
    ],
    declarations: [
        MyEventComponent,
        SpeakerComponent
    ],
    providers: [SpeakerResource, SpeakerService, MyEventResolve],
    exports: []

})
export class SpeakerModule { }
