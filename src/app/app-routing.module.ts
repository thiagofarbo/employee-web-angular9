import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { EmployeeComponent } from './views/employee/employee.component';

const routes: Routes = [
 {
    path: "",
    component: HomeComponent
 },
 {
    path: "employees",
    component: EmployeeComponent
 },
 {
   path: "employees/create",
   component: EmployeeCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
