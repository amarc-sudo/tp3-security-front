import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {LoginService} from "../../service/api/login.service";
import {Router} from "@angular/router";
import {SecurityService} from "../../service/api/security.service";
import {Observable} from "rxjs";
import {Client} from "../../api/objects/Client";
import {SecurityDatum} from "../../api/objects/SecurityDatum";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  list$: Observable<Array<SecurityDatum>> | undefined;
  displayedColumns: string[] = ['position', 'tag', 'variables', 'status'];


  constructor(private securityService: SecurityService, private router: Router) {
  }

  ngOnInit(): void {
    this.list$ = this.securityService.getSecurity();
  }

  save() {}

}


