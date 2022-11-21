import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router
} from '@angular/router';

import {
    AuthService
} from '../../login/auth.service';

import {
    AlertModalService
} from '../../shared/alert-modal.service';

@Component({
    selector: 'slide-bar',
    templateUrl: './slide-bar.component.html',
    styleUrls: ['./slide-bar.component.css'],
    providers: [AuthService]
})
export class SlideBarComponent implements OnInit {

    showMenu: boolean = false;

    constructor(private authService: AuthService, private router: Router,
        private alertModalService: AlertModalService,
    ) {}

    ngOnInit() {
        AuthService.updateValueIsAuthenticated.subscribe(
            isAuthenticated => {
                this.showMenu = isAuthenticated;
            }
        );
    }

    logout() {
        if (this.authService.signOut()) {
            this.router.navigate(['/home']);
            this.alertModalService.showAlertSuccess("usuario deslogado com sucesso")
        } else {
            this.alertModalService.showAlertDanger("usuario nao estava autenticado")
        }
    }

}