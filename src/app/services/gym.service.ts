import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { LocalstorageService } from './localstorage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GymService {
  apiUrl: string = this.global.baseUrl;
  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private lh: LocalstorageService
  ) {}
  getHomeInfo() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': this.lh.getUserKeyLocalStorage()
      })
    };
    return this.http.post(
      this.apiUrl + '/gyms/gym/',
      {

      },
      httpOptions
    );
  }
  addGym(data: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': this.lh.getUserKeyLocalStorage()
      })
    };
    return this.http.post(this.apiUrl + '/gyms/gym/', data, httpOptions)
  }

  fileUpload(img: File): Observable<Response> {
    const formData: FormData = new FormData();
    formData.append('file', img, img.name);
    return this.http.post<Response>(this.apiUrl + '/gyms/uploadgym/', formData)
  }
}
