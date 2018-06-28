import { Component, OnInit } from '@angular/core';
import { APPCONFIG } from '../../../../config';
import { Principal } from '../../../auth/principal.service';
import { LoginService } from '../../../components/login/login.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';


@Component({
    selector: 'app-navbar-top',
    styles: [],
    templateUrl: './navbar-top.component.html'
})

export class AppNavBarTopComponent implements OnInit {

    public AppConfig: any;
    // CURRENT USER
    public currentUser: User;

    /**
     * Constructor
     */
    constructor(
        private router: Router,
        private principal: Principal,
        private loginService: LoginService) {

    }

    /**
     * Init component .
     */
    ngOnInit() {
        this.AppConfig = APPCONFIG;
        this.principal.identity().then((account) => {
            this.currentUser = account;
        });
    }

    // TEST WHETHER THE CURRENT USER IS STILL AUTHENTICATED
    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    // LOGOUT FUCNTION
    logout() {
        this.loginService.logout().subscribe();
        this.principal.authenticate(null);
        this.router.navigate(['/events/list']);
    }
}
