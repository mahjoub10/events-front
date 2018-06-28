import { Component, OnInit, TemplateRef } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Principal } from '../../auth/principal.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'login',
  styles: [],
  templateUrl: './login.component.html',
})

// LOGIN COMPONENT IMPLEMENTATION
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public authenticationError = false;
  public modalRef: BsModalRef;

  // CONSTRUCTOR
  constructor(
    private modalService: BsModalService,
    private router: Router,
    private principal: Principal,
    private loginService: LoginService) {

  }

  // INIT COMPONENTS
  ngOnInit() {
    console.log('init login component');
  }

  public login(): void {
    this.loginService.login(this.username, this.password)
      .subscribe(
        (success) => {
          this.handleSuccessAuthentication();
        },
        (error) => {
          this.authenticationError = true;
        }
      );
  }

  // OPEN MODAL TO CHOOSE THE SUBSCRIPTION.
  public openSubscriptionChoice(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }



  // REDIRECT TO THE CORRECT PROFILE
  private handleSuccessAuthentication(): void {

    this.principal.identity(true).then((account) => {
      if (account !== null) {
        this.principal.identity(true).then((account: User) => {
          this.router.navigate(['/events/list']);
        });
      }

    });
  }
}
