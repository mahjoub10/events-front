
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Event } from '../../shared/models/event';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html'
})
export class RequestComponent implements OnInit {

  public requests = [];

  public settings = {
    columns: {
      firstName: {
        title: 'Nom',
        type: 'text',
        sort: true,
        filter: true
      },
      lastName: {
        title: 'Prénom',
        type: 'text',
        sort: true,
        filter: true
      },
      avsNumber: {
        title: 'AVS',
        type: 'text',
        sort: true,
        filter: true
      },
      birthday: {
        title: 'Date de naissance',
        type: 'text',
        sort: true,
        filter: true
      },
      deleted: {
        title: 'Etat',
        type: 'text',
        sort: true,
        filter: true,
        valuePrepareFunction: function (del: boolean) {
          return del ? 'Supprimé' : 'Actif';
        }
      }
    },
    actions: {
      add: false,
      columnTitle: 'Action',
      position: 'right',
    },
    edit: {
      editButtonContent: '<i class="ags ags-edit ags-2x color-succes-icon " />  '
    },
    delete: {
      deleteButtonContent: ' <i class="ags ags-trash-delete ags-2x color-danger-icon" /> '
    },
    mode: 'external',
    pager: {
      display: true,
      perPage: 10
    },
    attr: {
      class: 'table table-striped table-bordered table-hover table-checkable order-column dataTable no-footer'
    }
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.requests = this.route.snapshot.data['events'];

    console.log('The requests is ' + JSON.stringify(this.requests));
  }

}
