import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  constructor() {}
  getUserKeyLocalStorage(): string {
    if (localStorage.getItem('user-Key')) {
      return localStorage.getItem('user-Key');
    } else {
      return '';
    }
  }
  removeUserKeyLocalStorage() {
    if (localStorage.getItem('user-Key')) {
      return localStorage.removeItem('user-Key');
    }
  }
}
