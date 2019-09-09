import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';

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
  constructor() { }

  ngOnInit() {
  }

  createEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }
}
