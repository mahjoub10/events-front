import { Component, OnInit } from '@angular/core';
import { APPCONFIG } from '../../../config';
import { Principal } from '../../../shared/auth/principal.service';
import { LoginService } from '../../../shared/components/login/login.service';

@Component({
    selector: 'employer-navbar-left',
    styles: [],
    templateUrl: './employer-navbar-left.component.html'
})

export class EmployerNavBarLeftComponent implements OnInit {
    public AppConfig: any;


    /**
     * Constructor
     */
    constructor(private principal: Principal, private loginService: LoginService) {

    }

    /**
     * Init component .
     */
    ngOnInit() {
        this.AppConfig = APPCONFIG;
    }

    toggleCollapsedNav() {
        this.AppConfig.navCollapsed = !this.AppConfig.navCollapsed;
    }

}
