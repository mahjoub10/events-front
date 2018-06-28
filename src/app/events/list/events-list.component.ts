
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Event } from '../../shared/models/event';

@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

    public events = [];
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

}
