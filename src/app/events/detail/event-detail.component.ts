import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Event } from '../../shared/models/event';
import { Principal } from '../../shared/auth/principal.service';
import { AttendeeService } from '../../attendee/attendee.service';
import { AlertService } from '../../shared/components/alert/alert.service';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

    public event: Event;
    public isGoing = false;
    constructor(
        private vRef: ViewContainerRef,
        private alert: AlertService,
        private attendeeService: AttendeeService,
        private principal: Principal,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.alert.setViewContainerRef(this.vRef);
    }

    ngOnInit() {
        console.log('Init detail component');
        this.event = this.route.snapshot.data['event'];
        this.checkUserGoing();
    }

    public going(): void {

        // CHECK AUTHENTICATION.
        this.checkAuthentication();

        const id = this.event.id;
        this.attendeeService.subscribeToEvent(id)
            .subscribe(
                (success) => {
                    this.alert.alertSuccess('Inscription avec succée', 'Votre inscription est envoyée avec succé');
                },
                (error) => {
                    const message = 'L\'opération a échoué, essayez plus tard';
                    this.alert.alertError('Alert', message);
                }
            );

    }

    public notGoing(): void {
        // CHECK AUTHENTICATION.
        this.checkAuthentication();

        const id = this.event.id;
        this.attendeeService.unSubscribeToEvent(id)
            .subscribe(
                (success) => {
                    this.alert.alertSuccess('Inscription avec succée', 'Votre Désinscription est envoyée avec succé');
                },
                (error) => {
                    const message = 'L\'opération a échoué, essayez plus tard';
                    this.alert.alertError('Alert', message);
                }
            );
    }


    private checkAuthentication(): void {
        if (!this.principal.isAuthenticated()) {
            this.router.navigate(['/login']);
        }
    }

    private checkUserGoing() {
        if (!this.principal.isAuthenticated()) {
            this.principal.identity().then((account: any) => {
                this.event.attendees.forEach((ev) => {
                    if (ev.email === account.email) {
                        this.isGoing = true;
                    }
                });
            });
        }
    }

}
