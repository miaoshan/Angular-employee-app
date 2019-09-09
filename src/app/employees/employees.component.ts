import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      "id": 1,
      "birthDate": "1953-09-02",
      "firstName": "Georgi",
      "lastName": "Facello",
      "gender": "M",

    },
    {
      "id": 2,
      "birthDate": "1964-06-02",
      "firstName": "Bezalel",
      "lastName": "Simmel",
      "gender": "F",

    },
    {
      "id": 3,
      "birthDate": "1959-12-03",
      "firstName": "Parto",
      "lastName": "Bamford",
      "gender": "M",

    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
