import { FormsModule } from "@angular/forms";

import { PropertiesService } from "./properties.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PropertiesComponent } from "./properties.component";

import { PropertieFormComponent } from "./propertie-form/propertie-form.component";
import { PropertiesRoutingModule } from "./properties.routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PropertiesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [PropertiesComponent, PropertieFormComponent],
  providers: [PropertiesService],
})
export class PropertiesModule {}
