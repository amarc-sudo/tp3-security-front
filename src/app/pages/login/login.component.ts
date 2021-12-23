import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../service/api/login.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('myForm')
  formRef: FormGroupDirective | undefined;

  error: String | undefined;

  profileForm = new FormGroup({
    loginControl: new FormControl('', [Validators.required]),
    passwordControl: new FormControl('', [Validators.required])
  });

  constructor(private authService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  connect() {
    if (this.profileForm.valid) {
      // eslint-disable-next-line max-len
      this.authService.connect(this.profileForm.controls.loginControl.value, this.profileForm.controls.passwordControl.value).pipe(tap(data => {
        if (data) {
          // @ts-ignore
          if (data['error']) {
            // @ts-ignore
            this.error = data['error'];
          } else {
            console.log(data)
            // @ts-ignore
            localStorage.setItem('token', data['token']);

            // @ts-ignore
            switch (data['role']['tagRole']) {
              case 'admin':
                this.router.navigate(['admin']);
                break
              case 'affaire':
                this.router.navigate(['affaire']);
                break
              case 'residentiel':
                this.router.navigate(['residentiel']);
                break
            }
          }
        }
        //ici mettre le processus de connexion ou le decentraliser dans authService dans une autre methode
      })).subscribe();
    } else {

    }
  }
}
