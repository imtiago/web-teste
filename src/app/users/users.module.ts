import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { UsersComponent } from "./users.component";
import { UserDetailsComponent } from "./users-details/user-details.component";
import { UsersService } from "./users.service";
import { UsersRoutingModule } from "./users.routing.module";
import { UsersFormComponent } from "./users-form/users-form.component";

@NgModule({
  imports: [CommonModule, UsersRoutingModule, FormsModule],
  exports: [UsersFormComponent],
  declarations: [UsersComponent, UserDetailsComponent, UsersFormComponent],
  providers: [UsersService],
})
export class UsersModule {}
