import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { UserInterface } from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private api: ApiService
  ) {
  }

  register(user: UserInterface): Observable<any> {
    return this.api.post('users', user)
  }
}
