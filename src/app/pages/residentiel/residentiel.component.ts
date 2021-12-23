import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Client} from "../../api/objects/Client";
import {ClientService} from "../../service/api/client.service";

@Component({
  selector: 'app-residentiel',
  templateUrl: './residentiel.component.html',
  styleUrls: ['./residentiel.component.css']
})
export class ResidentielComponent implements OnInit {

  list$: Observable<Client[]> | undefined;

  displayedColumns: string[] = ['position', 'nom', 'prenom'];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.list$ = this.clientService.getResidentiel()
  }


}
