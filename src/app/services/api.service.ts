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
  ) {
  }

  get<T>(path: string): Observable<T> {
    return this.request('get', path)
  }

  post<T>(path: string, body: any = null): Observable<T> {
    return this.request('post', path, body)
  }

  delete<T>(path: string, body: any = null): Observable<T> {
    return this.request('delete', path, body)
  }

  private request<T>(method: string, path: string, body: any = null): Observable<T> {
    return this.http.request(method, this.endpoint + path, body ? {body} : {})
      .pipe(map((response: ApiResponseInterface) => response?.data ?? response))
  }

}
