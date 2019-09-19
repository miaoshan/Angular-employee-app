import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';



@Component({
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  searchTerm: string;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  changeEmployeeFirstName() {
    const newEmployeeArray: Employee[] = Object.assign([], this.employees);
    newEmployeeArray[0].firstName = 'Lucy';
    this.employees = newEmployeeArray;
  }
}
