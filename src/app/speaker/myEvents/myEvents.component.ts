import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../shared/models/event';
import { Attendee } from '../../shared/models/attendee';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'app-my-event-list',
    templateUrl: './myEvents.component.html',
    styleUrls: ['./myEvents.component.css']
})
export class MyEventComponent implements OnInit {

    public myEvents = [];
    public modalRef: BsModalRef;
    public attendee: Attendee;

    // CONSTRUCTOR
    constructor(
        private bsModalService: BsModalService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    // ON INIT LIFE CYCLE
    ngOnInit() {
        console.log('Init my event component');
        this.myEvents = this.route.snapshot.data['myEvents'];
    }

    openAttendeeDetail(att: Attendee, template: TemplateRef<any>): void {
        this.attendee = att;
        this.modalRef = this.bsModalService.show(template);

    }

}
