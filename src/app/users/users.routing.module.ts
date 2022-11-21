import { NgModule } from "@angular/core";
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersComponent } from "./users.component";

import { UserDetailsComponent } from "./users-details/user-details.component";
import { UsersFormComponent } from "./users-form/users-form.component";

const usersRoutes: Routes = [
  {
    path: "users",
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
