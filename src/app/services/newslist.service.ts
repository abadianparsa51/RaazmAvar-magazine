import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { LocalstorageService } from './localstorage.service';
@Injectable({
  providedIn: 'root'
})
export class NewslistService {
  apiUrl: string = this.global.baseUrl;
  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private lh: LocalstorageService
  ) { }
  getnewslistInfo(page, category) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': this.lh.getUserKeyLocalStorage()
      })
    };
    return this.http.get(this.apiUrl + '/news/list/' + page + '/' + category, httpOptions);
  }
  selectCategories(page: number, id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': this.lh.getUserKeyLocalStorage()
      })
    };
    return this.http.get(this.apiUrl + '/news/list/' + page + '/' + id, httpOptions);
  }
}
