import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';

const routes: Routes = [
 
  {path: "employees" , component:EmployeeListComponent},
  {path:"add-employee" , component:CreateEmployeeComponent},
  {path:"edit-employee/:id" , component:UpdateEmployeeComponent},
  {path:"delete-employee/:id" , component:DeleteEmployeeComponent},
  {path:"" , redirectTo :"employees" , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
