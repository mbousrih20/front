import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';

import { httpInterceptorProviders } from './pages/_helpers/http.interceptor';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { AddReservationComponent } from './pages/add-reservation/add-reservation.component';
import { ListClientComponent } from './pages/list-client/list-client.component';
import { AddReservationParasoleDialogComponentComponent } from './pages/add-reservation-parasole-dialog-component/add-reservation-parasole-dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddLienParenteComponent } from './pages/add-lien-parente/add-lien-parente.component';
import { ReservationDetailsDialogComponent } from './pages/reservation-details-dialog/reservation-details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    ReservationComponent,
    AddReservationComponent,
    ListClientComponent,
    AddReservationParasoleDialogComponentComponent,
    AddLienParenteComponent,
    ReservationDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ProfileComponent
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

