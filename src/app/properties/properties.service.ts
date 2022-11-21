import { Injectable } from "@angular/core";
import { IPropertie } from "./propertie";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
@Injectable()
export class PropertiesService {
  private readonly API = `${environment.API}/products`;

  getProperties() {
    return this.http.get<IPropertie[]>(this.API);
  }

  removePropertie(id: string) {
    return this.http.delete(`${this.API}/${id}`);
  }

  constructor(protected http: HttpClient) {}

  getImagesUrls() {
    return this.http.get<string[]>(this.API + "/getUrlImages");
  }

  save(propertie) {
    return this.http.post(this.API, propertie);
  }

  updatePropertie(id: string) {
    return this.http.get(`${this.API}/${id}/update`);
  }
}
