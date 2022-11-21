import { Component, OnInit } from "@angular/core";

import { SignUpService } from "./signUp.service";
import { AlertModalService } from "../shared/alert-modal.service";
import { IUser } from "./user";
import { Router } from "@angular/router";

@Component({
  selector: "app-signUp",
  templateUrl: "./signUp.component.html",
  styleUrls: ["./signUp.component.css"],
})
export class SignUpComponent implements OnInit {
  user: IUser;

  constructor(
    private signUpService: SignUpService,
    private alertModalService: AlertModalService,
    private router: Router
  ) {
    this.user = {} as IUser;
  }

  ngOnInit() {}

  save() {
    this.signUpService.create(this.user).subscribe((data) => {});
  }
}
