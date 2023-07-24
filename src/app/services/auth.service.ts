import { LocalstorageService } from './localstorage.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = this.global.baseUrl;
  private _isLogin: string;
  private _isCheckLogin: boolean;
  get isLogin(): string {
    if (!this._isCheckLogin) {
      this._isCheckLogin = true;
      this.checkUserLogin().subscribe(data => {
        this._isLogin = (data as any).code;
      });
    }
    return this._isLogin;
  }
  checkAgain() {
    this._isCheckLogin = false;
  }

  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private lh: LocalstorageService
  ) {}
  checkUserLogin() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': this.lh.getUserKeyLocalStorage()
      })
    };

    return this.http.get(this.apiUrl + '/register/loginstatus/', httpOptions);
  }
  login(userName: string, passWord: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': this.lh.getUserKeyLocalStorage()
      })
    };

    return this.http.post(
      this.apiUrl + '/register/checkuser/',
      { username: userName, password: passWord, remember: '1' },
      httpOptions
    );
  }
  signup(
    fullName: string,
    userName: string,
    passWord: string,
    genderVal: number
  ) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': this.lh.getUserKeyLocalStorage()
      })
    };

    return this.http.post(
      this.apiUrl + '/register/do/',
      {
        full_name: fullName,
        username: userName,
        password: passWord,
        gender: genderVal
      },
      httpOptions
    );
  }
  verification(userName: string, verificationCode: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': this.lh.getUserKeyLocalStorage()
      })
    };

    return this.http.post(
      this.apiUrl + '/register/activate/',
      {
        username: userName,
        code: verificationCode
      },
      httpOptions
    );
  }
  recovery(userName: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': this.lh.getUserKeyLocalStorage()
      })
    };

    return this.http.post(
      this.apiUrl + '/register/recover/',
      {
        username: userName,
      },
      httpOptions
    );
  }
}
