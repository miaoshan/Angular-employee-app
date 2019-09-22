import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  filteredEmployees: Employee[];
  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value)
  }

  filterEmployees(searchString: string) {
    return this.employees.filter(employee =>
      employee.firstName.toLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1);

  }
  constructor(private _employeeService: EmployeeService,
    private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.filteredEmployees = this.employees;
  }

  changeEmployeeFirstName() {
    this.employees[0].firstName = "Patrick";
    this.filteredEmployees = this.filterEmployees(this.searchTerm);
    // const newEmployeeArray: Employee[] = Object.assign([], this.employees);
    // newEmployeeArray[0].firstName = 'Lucy';
    // this.employees = newEmployeeArray;
  }

  onMouseMove() {

  }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId], {
      queryParams: { 'searchTerm': this.searchTerm, 'testParam': 'testValue' }
    })
  }
}
