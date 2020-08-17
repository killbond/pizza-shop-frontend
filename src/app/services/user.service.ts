import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { UserCreateRequestInterface } from "../interfaces/user-create-request.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private api: ApiService
  ) {
  }

  register(user: UserCreateRequestInterface): Observable<any> {
    return this.api.post('users', user)
  }
}
