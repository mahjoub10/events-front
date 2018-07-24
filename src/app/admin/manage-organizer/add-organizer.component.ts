import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Organizer } from '../../shared/models/organizer';
import { OrganizerService } from './organizer.service';
import { AlertService } from '../../shared/components/alert/alert.service';

@Component({
    selector: 'app-admin-add-organizer',
    templateUrl: './add-organizer.component.html'
})
export class AddOrganizerComponent implements OnInit {

    public organizer = new Organizer();
    public confirmPassword = '';

    constructor(
        private vRef: ViewContainerRef,
        private alert: AlertService,
        private service: OrganizerService) {
        this.alert.setViewContainerRef(this.vRef);
    }

    ngOnInit() {
        console.log('Init add organizer component');
    }

    /**
     * Create new organizer;
     */
    public createOrganizer(form: FormGroup): void {

        this.service
            .createOrganizer(this.organizer)
            .subscribe(
                (success) => {
                    form.reset();
                    this.alert.alertSuccess('Ajout avec succée', 'Le organizateur envoyée avec succé');
                },
                (error) => {
                    const message = 'L\'opération a échoué, essayez plus tard';
                    this.alert.alertError('Alert', message);
                }
            );
    }

}
