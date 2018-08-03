
import { Component, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Request } from '../../shared/models/request';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { RequestService } from './request.service';
import { AlertService } from '../../shared/components/alert/alert.service';

@Component({
  selector: 'app-request',
  templateUrl: './request-list.component.html'
})
export class RequestListComponent implements OnInit {

  public requests = [];
  public dataSource: MatTableDataSource<Request>;
  public displayedColumns = ['speaker', 'event', 'type', 'description', 'action'];
  public modalRef: BsModalRef;
  public idRequestSelected;

  constructor(
    private vRef: ViewContainerRef,
    private alert: AlertService,
    private requestService: RequestService,
    private bsModalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.alert.setViewContainerRef(this.vRef);
  }

  ngOnInit() {
    this.requests = this.route.snapshot.data['requests'];
    this.dataSource = new MatTableDataSource(this.requests);
  }

  // HANDLE action events
  public openDialog(idRequest: any, template: TemplateRef<any>): void {
    this.idRequestSelected = idRequest;
    this.modalRef = this.bsModalService.show(template);
  }

  public changeStatus(status): void {

    this.requestService.updateRequestStatus(this.idRequestSelected, status)
      .subscribe(
        (success) => {
          this.modalRef.hide();
          this.alert.alertSuccess('Ajout avec succée', 'La demande est modifier avec  avec succé');
          this.refreshRequest();
        },
        (error) => {
          this.modalRef.hide();
          const message = 'L\'opération a échoué, essayez plus tard';
          this.alert.alertError('Alert', message);
        });
  }

  private refreshRequest() {
    this.requestService.getRequestList()
      .subscribe(
        (data) => {
          this.requests = data;
          this.dataSource = new MatTableDataSource(this.requests);
        },
        (error) => {
          const message = 'L\'opération a échoué, essayez plus tard';
          this.alert.alertError('Alert', message);
        });

  }


}
