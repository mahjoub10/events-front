import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../shared/models/event';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'app-event-request',
    templateUrl: './event-request.component.html',
    styleUrls: ['./event-request.component.css']
})
export class EventRequestComponent implements OnInit {

    public events = [];
    public modalRef: BsModalRef;

    // CONSTRUCTOR
    constructor(
        private bsModalService: BsModalService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    // ON INIT LIFE CYCLE
    ngOnInit() {
        console.log('Init my event request component');
        this.events = this.route.snapshot.data['events'];
    }

    openAttendeeDetail(template: TemplateRef<any>): void {
        this.modalRef = this.bsModalService.show(template);

    }

}
