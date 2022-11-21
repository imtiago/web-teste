import { PropertiesComponent } from "./properties.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../guards/auth.guard";
import { PropertieFormComponent } from "./propertie-form/propertie-form.component";

const propertiesRoutes = [
  {
    path: "properties",
    component: PropertiesComponent,
    children: [],
  },
  { path: "properties/add", component: PropertieFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(propertiesRoutes)],
  exports: [RouterModule],
})
export class PropertiesRoutingModule {}
