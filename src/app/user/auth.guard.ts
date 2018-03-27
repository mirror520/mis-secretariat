import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private userService: UserService) {}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.userService.currentUser) {
      console.log('必須先登入使用者');

      this.userService.redirectUrl = state.url;
      this.router.navigate(['/login']);

      return false;
    }

    return true;
  }
}
