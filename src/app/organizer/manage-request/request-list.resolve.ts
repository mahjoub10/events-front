import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { RequestService } from './request.service';
import { Request } from '../../shared/models/request';

@Injectable()
export class RequestListResolve implements Resolve<Request[]> {

    constructor(private service: RequestService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.service.getRequestList();
    }
}
