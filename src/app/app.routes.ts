import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RegisterComponent } from './pages/register/register.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import {ForgetpasswordComponent} from "./pages/forgetpassword/forgetpassword.component";
import {ResetpasswordComponent} from "./pages/resetpassword/resetpassword.component";
import { NgModule } from '@angular/core';
import { AddReservationComponent } from './pages/add-reservation/add-reservation.component';
import { ListClientComponent } from './pages/list-client/list-client.component';
export const routes: Routes = [
 {
    path:'login',
    component:LoginComponent
 },
 {
    path:'home',
    component:HomeComponent
 },
 {
    path:'admin',
    component:AdminComponent
 },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent },
 { path: 'forgetpassword', component: ForgetpasswordComponent },
 { path: 'resetpassword', component: ResetpasswordComponent },
 { path: 'profile', component: ProfileComponent },
 { path: 'reservation', component: ReservationComponent },
 { path: 'admin', component: BoardAdminComponent },
 { path: 'AddRservation', component : AddReservationComponent },
 { path: 'ListClient', component : ListClientComponent },
 {

   path: '' ,redirectTo:'login' , pathMatch:'full'
},
];
@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }

