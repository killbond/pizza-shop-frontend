import { Component, OnInit } from '@angular/core';
import { catchError, finalize, map, switchMap } from "rxjs/operators";
import { ApiResponseInterface } from "../../interfaces/api-response.interface";
import { Observable, of } from "rxjs";
import { ValidationBagInterface } from "../../interfaces/validation-bag.interface";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faSpinner = faCircleNotch

  email: string

  password: string

  sending: boolean = false

  errors: ValidationBagInterface = {}

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/menu'])
    }
  }

  login(): void {
    this.sending = true
    this.auth.login(this.email, this.password)
      .pipe(
        catchError(this.errorHandling.bind(this)),
        finalize(() => this.sending = false),
        switchMap(() => this.router.navigate(['/menu'])),
      ).subscribe()
  }

  private errorHandling({error: response}): Observable<void> {
    if (response.hasOwnProperty('errors')) {
      this.errors = (response as ApiResponseInterface).errors
    } else {
      this.errors = {
        password: ['Invalid password.']
      }
    }
    return of()
  }

}
