import { Component, OnInit } from "@angular/core";

import { AuthService } from "./auth.service";
import { AlertModalService } from "../shared/alert-modal.service";
import { IUser } from "./user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: IUser;

  constructor(
    private authService: AuthService,
    private alertModalService: AlertModalService
  ) {
    this.user = {} as IUser;
  }

  ngOnInit() {}

  signIn() {
    this.authService.signIn(this.user);
  }
}
