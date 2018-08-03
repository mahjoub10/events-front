import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../shared/models/event';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { MatTableDataSource } from '@angular/material';
import { Principal } from '../../shared/auth/principal.service' ;

@Component({
    selector: 'app-event-request',
    templateUrl: './event-request.component.html',
    styleUrls: ['./event-request.component.css']
})
export class EventRequestComponent implements OnInit {

    public events = [];
    public currentUser;
    public modalRef: BsModalRef;
    public dataSource: MatTableDataSource<Event>;
    public displayedColumns = ['name', 'subject', 'organizer', 'description', 'start', 'participation'];

    // CONSTRUCTOR
    constructor(
        private principal: Principal,
        private bsModalService: BsModalService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    // ON INIT LIFE CYCLE
    ngOnInit() {
        console.log('Init my event request component');
        this.getCurrentUser();
        this.events = this.route.snapshot.data['events'];
        this.dataSource = new MatTableDataSource(this.events);
    }

    checkCurrentUserGoing(event: Event): string {

        const request = event.requests.find((req) => req.speakerId === this.currentUser.id);
        if (request === undefined || request === null) {
            return 'PARTICIPATE';
        } else {
            return request.status;
        }
    }

    private getCurrentUser() {
        this.principal.identity().then((account) => {
            this.currentUser = account;
        });
    }

}
