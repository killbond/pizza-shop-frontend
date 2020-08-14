import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiResponseInterface } from "../interfaces/api-response.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint: string = environment.endpoint

  constructor(
    private http: HttpClient,
  ) {}

  get(path: string): Observable<Object> {
    return this.request('get', path)
  }

  post(path: string, body: any): Observable<Object> {
    return this.request('post', path, body)
  }

  private request(method: string, path: string, body: any = null): Observable<Object> {
    return this.http.request(method, this.endpoint + path, {body: body})
      .pipe(map((response: ApiResponseInterface) => response.data ?? response))
  }

}
