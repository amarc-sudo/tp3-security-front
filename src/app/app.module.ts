import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptorService} from "./service/api/auth-interceptor.service";
import { AdminComponent } from './pages/admin/admin.component';
import { AffaireComponent } from './pages/affaire/affaire.component';
import { ResidentielComponent } from './pages/residentiel/residentiel.component';
import {AdminGuard} from "./service/guard/admin.guard";
import {AffaireGuard} from "./service/guard/affaire.guard";
import {ResidentielGuard} from "./service/guard/residentiel.guard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AffaireComponent,
    ResidentielComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'affaire',
        component: AffaireComponent,
        canActivate: [AffaireGuard],
      },
      {
        path: 'residentiel',
        component: ResidentielComponent,
        canActivate: [ResidentielGuard],
      },
    ]),
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [HttpClientModule, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
