import { Injectable } from '@angular/core';
import {AuthInterceptorService} from "./auth-interceptor.service";
import {ParentApiService} from "./parent.api.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ParentApiService{

  constructor(private httpClient: HttpClient) { super(); }


  connect(login: string, password: string): Observable<Map<string,any>> {
    return this.httpClient.post<Map<string,any>>(this.api + '/rest/api/user/login', {
      login,
      password
    });
  }

  checkAdmin(): Observable<any>{
    return this.httpClient.get(this.api + '/rest/api/user/admin/check');
  }

  checkAffaire(): Observable<any>{
    return this.httpClient.get(this.api + '/rest/api/user/affaire/check');
  }

  checkResidentiel(): Observable<any>{
    return this.httpClient.get(this.api + '/rest/api/user/residentiel/check');
  }
}
