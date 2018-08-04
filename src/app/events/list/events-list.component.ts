
import { Component, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AlertService } from '../../shared/components/alert/alert.service';
import { AttendeeService } from '../../attendee/attendee.service';
import { Event } from '../../shared/models/event';
import { Principal } from '../../shared/auth/principal.service';


@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

    public modalRef: BsModalRef;
    public idSelectedEvent;
    public events = [];
    public currentUser;
    constructor(
        private principal: Principal,
        private attendeeService: AttendeeService,
        private vRef: ViewContainerRef,
        private alert: AlertService,
        private bsModalService: BsModalService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.alert.setViewContainerRef(this.vRef);
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
        this.getCurrentUser();
    }


    // HANDLE action events
    public openDialog(idEvent: any, template: TemplateRef<any>): void {
        this.idSelectedEvent = idEvent;
        this.modalRef = this.bsModalService.show(template);
    }

    public isAttendeeGoing(event: Event): boolean {
        const attendee = event.attendees.find((att) => att !== undefined && this.currentUser !== undefined &&  (att.id === this.currentUser.id));
        return attendee !== undefined;
    }


    public subscribeToEvent(): void {
        this.attendeeService.subscribeToEvent(this.idSelectedEvent)
            .subscribe(
                (success) => {
                    this.modalRef.hide();
                    this.alert.alertSuccess('Inscription avec succée', 'La demande est enoyée avec succée');
                },
                (error) => {
                    this.modalRef.hide();
                    const message = 'L\'opération a échoué, essayez plus tard';
                    this.alert.alertError('Alert', message);
                });
    }


    private getCurrentUser() {
        this.principal.identity().then((account) => {
            this.currentUser = account;
        });
    }

}
