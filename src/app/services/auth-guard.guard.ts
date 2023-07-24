import { LocalstorageService } from './localstorage.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private lh: LocalstorageService,
    private route: Router,
    public toastController: ToastController
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.lh.getUserKeyLocalStorage() === '') {
      this.toastController
        .create({
          message: 'برای ادامه کار وارد شوید',
          color: 'danger',
          position: 'bottom',
          duration: 4000
        })
        .then(toast => {
          toast.present();
        });
      this.route.navigate(['/authentication/login']);
      return false;
    } else {
      return true;
    }
  }
}
