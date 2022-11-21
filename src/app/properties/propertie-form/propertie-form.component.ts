import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlertModalService } from "../../shared/alert-modal.service";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap, exhaustMap } from "rxjs/operators";
import { PropertiesService } from "../properties.service";

@Component({
  selector: "app-propertie-form",
  templateUrl: "./propertie-form.component.html",
  styleUrls: ["./propertie-form.component.scss"],
})
export class PropertieFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  images: string[];

  constructor(
    private fb: FormBuilder,
    private service: PropertiesService,
    private modal: AlertModalService,
    private location: Location
  ) {}

  ngOnInit() {
    this.service.getImagesUrls().subscribe((urls) => (this.images = urls));

    this.form = this.fb.group({
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      details: [null, [Validators.required]],
      price: [null, [Validators.required]],
      percent: [null, [Validators.required]],
      image: [null, []],
    });
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      let msgSuccess = "imovel cadastrado com sucesso!";
      let msgError = "Erro ao cadastrar imovel, tente novamente!";
      if (this.form.value.id) {
        msgSuccess = "Imovel atualizado com sucesso!";
        msgError = "Erro ao atualizar Imovel, tente novamente!";
      }

      this.service.save(this.form.value).subscribe(
        (success) => {
          this.modal.showAlertSuccess(msgSuccess);
          this.location.back();
        },
        (error) => this.modal.showAlertDanger(msgError)
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
