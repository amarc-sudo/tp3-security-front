import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Client} from "../../api/objects/Client";
import {ClientService} from "../../service/api/client.service";

@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.css']
})
export class AffaireComponent implements OnInit {

  list$: Observable<Client[]> | undefined;

  displayedColumns: string[] = ['position', 'nom', 'prenom'];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.list$ = this.clientService.getAffaire()
  }

}
