import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { TokenInterface } from "../interfaces/token.interface";
import { map } from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: ApiService,
    private helper: JwtHelperService,
  ) {
  }

  login(email: string, password: string): Observable<TokenInterface> {
    return this.api.post('auth/login', {email, password})
      .pipe(map((token: TokenInterface) => {
        let decoded = this.helper.decodeToken(token.access_token)
        localStorage.setItem('access_token', token.access_token)
        localStorage.setItem('jwt', JSON.stringify(decoded))
        return token
      }));
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('access_token') != null && localStorage.getItem('jwt') != null;
  }

  getUserId(): number {
    let jwt = localStorage.getItem('jwt'),
      userData = JSON.parse(jwt)
    return userData.sub
  }

}
