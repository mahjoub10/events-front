
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

import { AttendeeRoutingModule } from './attendee-routing.module';
import { AttendeeSubscriptionComponent } from './subscription/attendee-subscription.component';
import { AttendeeComponent } from './attendee.component';
import { AttendeeResource } from './attendee.resource';
import { AttendeeService } from './attendee.service';
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
        FormsModule,
        RouterModule,
        AttendeeRoutingModule,
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        AttendeeSubscriptionComponent,
        AttendeeComponent
    ],
    providers: [AttendeeResource, AttendeeService],
    exports: []

})
export class AttendeeModule { }
