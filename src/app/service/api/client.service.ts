import { Injectable } from '@angular/core';
import {ParentApiService} from "./parent.api.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../../api/objects/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientService extends ParentApiService{

  constructor(private httpClient: HttpClient) { super(); }

  getAffaire(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(this.api + '/rest/api/affaire/getAll');
  }


  getResidentiel(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(this.api + '/rest/api/residentiel/getAll');
  }
}
