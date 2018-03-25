import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../guards/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private router: Router,private authService: AuthService ) {

    }

    canActivate(): boolean {
        // let isAuthorized = this.authService.getIsOnline();
        // debugger
        // if (!isAuthorized) {
        //     this.router.navigate(['/authorize']);
        // }
        // return isAuthorized;
        return true;
    }
}
