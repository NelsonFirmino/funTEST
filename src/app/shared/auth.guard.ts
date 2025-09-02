import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {      

     if (!!window.sessionStorage.getItem('auth_key')) {  return true; }
      // Store the attempted URL for redirecting
      // this.loginService.redirectUrl = url;
      // Navigate to the login page with extras
      this.router.navigate(['/login']);
      return false;
    }
}
