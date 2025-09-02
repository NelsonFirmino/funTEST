import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor (
    private user: LoginService,
    private router: Router ) { }

  canActivate() {
      // tslint:disable-next-line:prefer-const
      let isLoggedIn = this.user.isLoggedIn();
      if (!isLoggedIn) {
          this.router.navigate(['login']);
      }
      return isLoggedIn;
  }
}
