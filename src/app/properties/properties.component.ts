import { Component, OnInit } from "@angular/core";

import { PropertiesService } from "./properties.service";
import { AlertModalService } from "../shared/alert-modal.service";
import { IPropertie } from "./propertie";
@Component({
  selector: "app-properties",
  templateUrl: "./properties.component.html",
  styleUrls: ["./properties.component.css"],
})
export class PropertiesComponent implements OnInit {
  properties: IPropertie[];

  constructor(
    private propertiesService: PropertiesService,
    private alertModalService: AlertModalService
  ) {}

  ngOnInit() {
    this.propertiesService
      .getProperties()
      .subscribe((data) => (this.properties = data));
  }

  remove(id: string) {
    this.propertiesService.removePropertie(id).subscribe((data) => {
      this.alertModalService.showAlertSuccess("imovel excluido com sucesso");
    });

    this.propertiesService
      .getProperties()
      .subscribe((data) => (this.properties = data));
  }

  sold(id: string) {
    this.propertiesService.updatePropertie(id).subscribe((data) => {
      this.alertModalService.showAlertSuccess("imovel marcado como vendido");
    });

    this.propertiesService
      .getProperties()
      .subscribe((data) => (this.properties = data));
  }

  onRefresh() {}
}
