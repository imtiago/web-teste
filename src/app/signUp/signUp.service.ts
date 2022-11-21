import { Injectable, EventEmitter } from "@angular/core";

import { IUser } from "./user";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class SignUpService {
  private readonly API = `${environment.API}`;

  static users: IUser[] = [];

  constructor(protected http: HttpClient) {}

  create(user: IUser) {
    return this.http.post<{
      token: string;
    }>(this.API + "/signUp", user);
  }

  checkUser(user) {
    return this.http.post<{
      token: string;
    }>(this.API + "/signIn", user);
  }
  getUser() {
    return {};
  }
}
