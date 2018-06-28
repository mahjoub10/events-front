import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatInputModule, MatMenuModule, MatListModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

//  ROUTING
import { SharedRoutingModule } from './shared-routing.module';

//  COMPOENTS
import { LoginComponent } from './components/login/login.component';
import { AppNavBarTopComponent } from './layouts/navbar/navbar-top/navbar-top.component';

//  SERVIVES
import { LoginResource } from './resources/login.resource';
import { AccountService } from './auth/account.service';
import { Principal } from './auth/principal.service';
import { LoginService } from './components/login/login.service';
import { AuthExpiredInterceptor } from './blocks/interceptors/auth-expired.interceptor';
import { AuthGuard } from './auth/auth-guard.service';
import { AlertService } from './components/alert/alert.service';
import { HasAnyAuthorityDirective } from './directive/has-any-authority.directive';

@NgModule({
  imports: [
    SharedRoutingModule,
    RouterModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
  ],
  declarations: [
    LoginComponent,
    AppNavBarTopComponent,
    HasAnyAuthorityDirective
  ],
  providers: [
    LoginResource,
    AccountService,
    Principal,
    LoginService,
    AuthExpiredInterceptor,
    AuthGuard,
    AlertService
  ],
  exports: [
    LoginComponent,
    AppNavBarTopComponent,
    HasAnyAuthorityDirective
  ]
})

export class SharedModule { }
