import { Router } from "@angular/router";
import { Injectable, EventEmitter } from "@angular/core";

import { IUser } from "./user";
import { SignUpService } from "../signUp/signUp.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class AuthService {
  private readonly API = `${environment.API}`;

  private isAuthenticated: boolean = false;

  static updateValueIsAuthenticated = new EventEmitter<boolean>();

  private updateIsAuthenticated(value: boolean) {
    this.isAuthenticated = value;
    AuthService.updateValueIsAuthenticated.emit(value);
  }

  constructor(
    protected http: HttpClient,
    private router: Router,
    private signUpService: SignUpService
  ) {
    if (localStorage.getItem("token")) {
      this.updateIsAuthenticated(true);
      this.router.navigate(["/"]);
    }
  }

  signIn(user: IUser) {
    this.signUpService.checkUser(user).subscribe(
      (response) => {
        this.updateIsAuthenticated(true);

        localStorage.setItem("token", response.token);

        this.router.navigate(["/"]);
      },
      (error) => {
        this.updateIsAuthenticated(false);
        alert("erro ao realizar login");
      }
    );
  }

  signOut() {
    this.http.get(this.API + "/logout").subscribe((response) => {
      console.log("deslogado");
    });
    this.updateIsAuthenticated(false);
    localStorage.removeItem("token");
    return true;
  }

  userIsAuthenticated() {
    return this.isAuthenticated;
  }
}
