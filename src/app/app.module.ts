import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';

const appRoutes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }




];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    EmployeeFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
