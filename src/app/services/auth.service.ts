import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { TokenInterface } from "../interfaces/token.interface";
import { map, tap } from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserInterface } from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get user(): UserInterface {
    let jwt = JSON.parse(localStorage.getItem('jwt'))
    return jwt?.user
  }

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

  logout(): Observable<unknown> {
    return this.api.delete('auth/login')
      .pipe(tap(() => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('jwt')
      }))
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('access_token') != null && localStorage.getItem('jwt') != null
  }

}
