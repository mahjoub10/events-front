
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { RequestResource } from './request.resource';
import { Request } from '../../shared/models/request';

@Injectable()
export class RequestService {

    constructor(private resource: RequestResource) { }

    /**
     * Get request list.
     */
    public getRequestList(): Observable<Request[]> {

        return this.resource.getRequestList();
    }


    public addRequest(request: Request): Observable<any> {

        return this.resource.createRequest(request);
    }

    public updateRequestStatus(idRequest: number, newStatus: string): Observable<any> {

        return this.resource.updateRequestStatus(idRequest, newStatus);
    }

}
