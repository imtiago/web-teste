import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';
import {
    AlertModalService
} from '../../shared/alert-modal.service';
import {
    Location
} from '@angular/common';
import {
    ActivatedRoute
} from '@angular/router';
import {
    map,
    switchMap,
    exhaustMap
} from 'rxjs/operators';
import {
    UsersService
} from '../users.service';

import {
    IUser
} from '../user';

@Component({
    selector: 'app-users-form',
    templateUrl: './users-form.component.html',
    styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  //  form: FormGroup;
 //   submitted = false;
    
    user: any = {}

    constructor(
      //  private fb: FormBuilder,
        private service: UsersService,
        private modal: AlertModalService,
  //      private location: Location,
 //       private route: ActivatedRoute
    ) {}

    ngOnInit() {
/*
        const user = this.route.snapshot.data['user'];

        this.form = this.fb.group({
            id: [user.id],
            name: [user.name, [Validators.required, Validators.maxLength(250)]],
            email: [user.email, [Validators.required, Validators.maxLength(250)]],
            password: [user.password, [Validators.required, Validators.minLength(6), Validators.maxLength(250)]]
        });*/
    }

    hasError(field: string) {
     //   return this.form.get(field).errors;
    }

    onSubmit() { alert("ok")
   /*     this.submitted = true;
        console.log(this.form.value);
        if (this.form.valid) {
            console.log('submit');

            let msgSuccess = 'usuario criado com sucesso!';
            let msgError = 'Erro ao criar usuario, tente novamente!';
            if (this.form.value.id) {
                msgSuccess = 'Usuario atualizado com sucesso!';
                msgError = 'Erro ao atualizar Usuario, tente novamente!';
            }

            this.service.save(this.form.value).subscribe(
                success => {
                    this.modal.showAlertSuccess(msgSuccess);
                    this.location.back();
                },
                error => this.modal.showAlertDanger(msgError)
            );
        }*/
    }

    onCancel() {
  /*      this.submitted = false;
        this.form.reset();*/
    }
}