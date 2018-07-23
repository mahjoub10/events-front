import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast } from 'ng2-toastr/ng2-toastr';

import { Event } from '../../shared/models/event';
import { EventService } from './event.service';
import { AlertService } from '../../shared/components/alert/alert.service';
import { Speaker } from '../../shared/models/speaker';

@Component({
    selector: 'app-admin-add-event',
    templateUrl: './add-event.component.html'
})
export class AddEventComponent implements OnInit {

    public event = new Event();
    public confirmPassword = '';
    public selectedSpeakers = [];
    public speakers = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private vRef: ViewContainerRef,
        private alert: AlertService,
        private service: EventService) {
        this.alert.setViewContainerRef(this.vRef);
    }

    ngOnInit() {
        console.log('Init add event component');
        this.speakers = this.route.snapshot.data['speakers'];
    }

    /**
     * Create new Event;
     */
    public createEvent(form: FormGroup): void {

        const se = this.selectedSpeakers.map((a: any) => this.speakers.find((sp) => sp.id === a));

        this.event.speakers = se;
        this.service
            .createEvent(this.event)
            .subscribe(
                (success) => {
                    form.reset();
                    this.alert.alertSuccess('Ajout avec succée', 'L\'évenement est ajouté avec succé')
                        .then((toast: Toast) => {
                            setTimeout(() => {
                                this.router.navigate(['/events/list']);
                            }, 2000);
                        });
                },
                (error) => {
                    const message = 'L\'opération a échoué, essayez plus tard';
                    this.alert.alertError('Alert', message);
                }
            );
    }

}
