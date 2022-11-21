import {
    Component,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
//import { Subscription } from 'rxjs/Rx';

import {
    UsersService
} from '../users.service';

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    user: any = {
        id: "12",
        name: "tiago",
        email: "tiago@gmail.com"
    }
    //id: number;
    //  inscricao: Subscription;
    //  curso: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private usersService: UsersService,
    ) {
        //this.id = this.route.snapshot.params['id'];
        //console.log(this.route);
    }

    ngOnInit() {
        //this.user = this.usersService.myProfile();
        /* this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursosService.getCurso(this.id);

        if (this.curso == null){
            this.router.navigate(['/cursos/naoEncontrado']);
        }
      }
    );*/
    }

    ngOnDestroy() {
        //this.inscricao.unsubscribe();
    }

}