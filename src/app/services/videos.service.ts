import {LocalstorageService} from './localstorage.service';
import {Injectable} from '@angular/core';
import {GlobalService} from './global.service';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class VideosService {
    apiUrl: string = this.global.baseUrl;

    constructor(
        private http: HttpClient,
        private global: GlobalService,
        private lh: LocalstorageService
    ) {
    }

    getvideos(page, category) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-Auth-Token': this.lh.getUserKeyLocalStorage()
            })
        };
        return this.http.get(this.apiUrl + '/videos/list/' + page + '/' + category, httpOptions);
    }

    getcategories(section) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-Auth-Token': this.lh.getUserKeyLocalStorage()
            })
        };
        return this.http.get(this.apiUrl + '/category/list/' + section, httpOptions);
    }

    videoLikeStatus(section) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-Auth-Token': this.lh.getUserKeyLocalStorage()
            })
        };
        return this.http.get(this.apiUrl + '/videos/likestatus/' + section, httpOptions);
    }

    likeVideo(section) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-Auth-Token': this.lh.getUserKeyLocalStorage()
            })
        };
        return this.http.post(this.apiUrl + '/videos/like/' + section, [], httpOptions);
    }
}
