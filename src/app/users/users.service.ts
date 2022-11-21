import { Injectable } from "@angular/core";
import { CrudService } from "../shared/crud-service";
import { IUser } from "./user";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UsersService extends CrudService<IUser> {
  private user = {
    id: "12",
    name: "tiago",
    email: "tiago@gmail.com",
  };
  constructor(protected http: HttpClient) {
    super(http, `${environment.API}users`);
  }

  myProfile() {
    this.user;
  }
}
