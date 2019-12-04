import { BasicAuthService } from './basic-auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  constructor(private auth: BasicAuthService, private router: Router) {}


  /**
   * Guards all roots in case of a non authentificated user tries
   * to access content by manually typing in the url to bypass login.
   * Will be redirected to login page.
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isUserLogedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
