import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';

import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    console.log('AuthGuard');

    return this.checkAccess();
  }

  private checkAccess(){
    if (this.authService.userIsAuthenticated()){
      return true;
    } 

    this.router.navigate(['/home']);

    return false;
  }

  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad: verificando se usuário pode carregar o cod módulo');

      return this.checkAccess();
    }

}
