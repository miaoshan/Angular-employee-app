import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = {
    id: null,
    birthDate: null,
    firstName: null,
    lastName: null,
    gender: null,
    email: null,
    phoneNumber: null,
  }
  constructor(private _employeeService: EmployeeService,
    private _router: Router) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this._employeeService.save(this.employee);
    this._router.navigate(['employees']);
  }
}
