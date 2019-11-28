import { HardCodedAuthService } from './hard-coded-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private auth: HardCodedAuthService, private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.auth.isUserLogedIn()){
      return true;
    }else{
    this.router.navigate(['/login']);
    return false;}
  }


}
