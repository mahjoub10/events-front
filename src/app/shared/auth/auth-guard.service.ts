import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { Principal } from './principal.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private principal: Principal, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {

        return Observable.create((observer: Subject<boolean>) => {
            this.principal.identity().then((account: any) => {
                if (account) {
                    observer.next(true);
                } else {
                    // Navigate to the login page
                    this.router.navigate(['/shared/login']);
                    observer.next(false);
                }
            });

        });
    }
}

