import {
    NgModule
} from '@angular/core';
import {
    ModuleWithProviders
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import {
    DashboardComponent
} from './dashboard/dashboard.component';
import {
    SignUpComponent
} from './signUp/signUp.component';
import {
    UserDetailsComponent
} from './users/users-details/user-details.component';
import {
    ProfileComponent
} from './profile/profile.component';
import {
    HomeComponent
} from './home/home.component';
import {
    LoginComponent
} from './login/login.component';
import {
    NotFoundComponent
} from './not-found/not-found.component';

import {
    AuthGuard
} from './guards/auth.guard';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [{
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'cadastro',
            component: SignUpComponent
        },
        ]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    } 
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        useHash: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }