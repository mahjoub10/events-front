import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { Attendee } from '../../shared/models/attendee';
import { AttendeeService } from '../attendee.service';
import { AlertService } from '../../shared/components/alert/alert.service';
@Component({
    selector: 'app-attendee-subscription',
    templateUrl: './attendee-subscription.component.html'
})
export class AttendeeSubscriptionComponent implements OnInit {

    // PREPARE EMPTY ATTENDEE.
    public attendee: Attendee = new Attendee();

    public confirmPassword = '';

    // CONSTRUCTOR
    constructor(
        private vRef: ViewContainerRef,
        private alert: AlertService,
        private service: AttendeeService) {
        this.alert.setViewContainerRef(this.vRef);
    }

    // ON INIT LIFE CYCLE
    ngOnInit() {
        console.log('Init attendee subscription component');
    }

    /**
     * Send candiate subscription.
     */
    public subscribe(): void {

        console.log(JSON.stringify(this.attendee));
        this.service.submitSubscription(this.attendee)
            .subscribe(
                (success) => {
                    this.alert.alertSuccess('Ajout avec succée', 'Votre inscription est envoyée avec succé');
                },
                (error) => {
                    const message = 'L\'opération a échoué, essayez plus tard';
                    this.alert.alertError('Alert', message);
                }
            );

    }


}

