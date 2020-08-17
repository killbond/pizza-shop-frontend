import { Component, OnInit } from '@angular/core';
import { ValidationBagInterface } from "../../interfaces/validation-bag.interface";
import { UserService } from "../../services/user.service";
import { UserCreateRequestInterface } from "../../interfaces/user-create-request.interface";
import { catchError, finalize, switchMap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { ApiResponseInterface } from "../../interfaces/api-response.interface";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  faSpinner = faCircleNotch

  email: string

  password: string

  passwordConfirmation: string

  name: string

  phone: string

  errors: ValidationBagInterface = {}

  sending: boolean = false

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  register(): void {
    this.userService.register(this.newUser())
      .pipe(
        catchError(this.errorHandling.bind(this)),
        finalize(() => this.sending = false),
        switchMap(() => this.auth.login(this.email, this.password)),
        switchMap(() => this.router.navigate(['/menu'])),
      ).subscribe()
  }

  private errorHandling({error: response}): Observable<void> {
    if (response.hasOwnProperty('errors')) {
      this.errors = (response as ApiResponseInterface).errors
    }
    return of()
  }

  private newUser(): UserCreateRequestInterface {
    return {
      name: this.name,
      password: this.password,
      password_confirmation: this.passwordConfirmation,
      email: this.email,
      phone: this.phone,
    }
  }

}
