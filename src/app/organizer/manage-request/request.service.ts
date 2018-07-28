
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


}
