import { ListEmployeesComponent } from './employee/list-employees.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListEmployeesComponent },
  {path: 'regs', component: RegistrationComponent},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
