import { Component, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../shared/models/request';
import { Event } from '../../shared/models/event';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Principal } from '../../shared/auth/principal.service';
import { RequestService } from '../../organizer/manage-request/request.service';
import { FormGroup } from '@angular/forms';
import { AlertService } from '../../shared/components/alert/alert.service';
import { Toast } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-request-create',
    templateUrl: './create-request.component.html'
})
export class CreateRequestComponent implements OnInit {

    public currentEvent: Event;
    public request = new Request();
    public currentUser;
    public participationTypes = [{ key: 'COMPETITION', value: 'Compététion' }, { key: 'WORKSHOP', value: 'Workshop' }, { key: 'ALL', value: 'Les deux' }];

    // CONSTRUCTOR
    constructor(
        private vRef: ViewContainerRef,
        private alert: AlertService,
        private requestService: RequestService,
        private principal: Principal,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.alert.setViewContainerRef(this.vRef);
     }

    // ON INIT LIFE CYCLE
    ngOnInit() {
        console.log('Init create request component');
        this.currentEvent = this.route.snapshot.data['event'];
        this.request.eventId = this.currentEvent.id;

        this.getCurrentUser();
    }

    public addRequest(form: FormGroup): void {
        this.requestService.addRequest(this.request)
            .subscribe(
                (success) => {
                    form.reset();
                    this.alert.alertSuccess('Ajout avec succée', 'L\'évenement est ajouté avec succé')
                        .then((toast: Toast) => {
                            setTimeout(() => {
                                this.router.navigate(['/speaker/events/requests']);
                            }, 2000);
                        });
                },
                (error) => {
                    const message = 'L\'opération a échoué, essayez plus tard';
                    this.alert.alertError('Alert', message);
                });
    }

    private getCurrentUser() {
        this.principal.identity().then((account) => {
            this.currentUser = account;
            this.request.speakerId = account.id;
        });
    }
}
