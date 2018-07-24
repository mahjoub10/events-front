
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Organizer } from '../../shared/models/organizer';

@Component({
    selector: 'app-organizer-list',
    templateUrl: './list-organizer.component.html'
})
export class OrganizerListComponent implements OnInit {

    public organizers = [];
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.organizers = this.route.snapshot.data['organizers'];
        console.log(JSON.stringify(this.organizers));
    }

}
