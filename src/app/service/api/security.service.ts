import { Injectable } from '@angular/core';
import {ParentApiService} from "./parent.api.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../../api/objects/Client";
import {SecurityDatum} from "../../api/objects/SecurityDatum";

@Injectable({
  providedIn: 'root'
})
export class SecurityService extends ParentApiService{

  constructor(private httpClient: HttpClient) { super(); }

  getSecurity(): Observable<Array<SecurityDatum>>{
    return this.httpClient.get<Array<SecurityDatum>>(this.api + '/rest/api/security/getAll');
  }

  saveSecurity(securityDatum: Array<SecurityDatum> ): Observable<any> {
    return this.httpClient.post(this.api + '/rest/api/security/saveAll', securityDatum);
  }

}
