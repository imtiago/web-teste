import { Component, OnInit } from "@angular/core";

import { SignUpService } from "../signUp/signUp.service";
import { AlertModalService } from "../shared/alert-modal.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(
    private signUpService: SignUpService,
    private alertModalService: AlertModalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signUpService.getUser();
  }
}
