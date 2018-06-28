import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Speaker } from '../../shared/models/speaker';
import { SpeakerService } from './speaker.service';
import { AlertService } from '../../shared/components/alert/alert.service';

@Component({
    selector: 'app-admin-add-speaker',
    templateUrl: './add-speaker.component.html'
})
export class AddSpeakerComponent implements OnInit {

    public speaker = new Speaker();
    public confirmPassword = '';

    constructor(
        private vRef: ViewContainerRef,
        private alert: AlertService,
        private service: SpeakerService) {
        this.alert.setViewContainerRef(this.vRef);
    }

    ngOnInit() {
        console.log('Init add speaker component');
    }

    /**
     * Create new Speaker;
     */
    public createSpeaker(form: FormGroup): void {

        this.service
            .createSpeaker(this.speaker)
            .subscribe(
                (success) => {
                    form.reset();
                    this.alert.alertSuccess('Ajout avec succée', 'Le speaker envoyée avec succé');
                },
                (error) => {
                    const message = 'L\'opération a échoué, essayez plus tard';
                    this.alert.alertError('Alert', message);
                }
            );
    }

}
