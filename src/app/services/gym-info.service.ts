import { LocalstorageService } from './localstorage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class GymInfoService {
  apiUrl: string = this.global.baseUrl;
  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private lh: LocalstorageService
  ) {}
  getGymInfo(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': this.lh.getUserKeyLocalStorage()
      })
    };
    return this.http.get(this.apiUrl + '/gyms/display/' + id, httpOptions);
  }
}
