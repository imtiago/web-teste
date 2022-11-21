import { AuthGuard } from './guards/auth.guard';
import { ModalModule } from 'ngx-bootstrap/modal';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    NgModule
} from '@angular/core';
import {
    FormsModule
} from '@angular/forms';

import {
    AppComponent
} from './app.component';
import {
    DashboardComponent
} from './dashboard/dashboard.component';
import {
    HomeComponent
} from './home/home.component';
import {
    ProfileComponent
} from './profile/profile.component';
import {
    LoginComponent
} from './login/login.component';
import {
    SignUpComponent
} from './signUp/signUp.component';
import {
    AppRoutingModule
} from './app.routing.module';

import { PropertiesModule } from './properties/properties.module';

import { SharedModule } from './shared/shared.module';

import { UsersModule } from './users/users.module';
import {
    SlideBarComponent
} from './components/slide-bar/slide-bar.component';
import {
    DashboardService
} from './dashboard/dashboard.service';
import {
    AuthService
} from './login/auth.service';
import {
    SignUpService
} from './signUp/signUp.service';

import {
    NotFoundComponent
} from './not-found/not-found.component';
import {
    HttpClientModule
} from '@angular/common/http';
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ProfileComponent,
        SignUpComponent,
        HomeComponent,
        DashboardComponent,
        SlideBarComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        PropertiesModule,
        UsersModule,
        ModalModule.forRoot(),
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        AuthService,
        SignUpService,
        DashboardService,
        AuthGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}