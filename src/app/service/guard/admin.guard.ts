import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../api/login.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let returnStatement = false

    if (localStorage.getItem('token') == null) {
      return false;
    }
    return this.loginService.checkAdmin().toPromise().then(value => {
      return value;
    }).catch(error => {                              //Error callback
      console.error('Vous avez pas les droits');
      return false
      //throw error;   //You can also throw the error to a global error handler
    });
  }

}
