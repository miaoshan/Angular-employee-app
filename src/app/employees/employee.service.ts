import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
    private Employees: Employee[] = [
        {
            "id": 1,
            "birthDate": "1953-09-02",
            "firstName": "Georgi",
            "lastName": "Facello",
            "gender": "M",
            "email": "mark@gmail.com",


        },
        {
            "id": 2,
            "birthDate": "1964-06-02",
            "firstName": "Bezalel",
            "lastName": "Simmel",
            "gender": "F",
            "email": "beza@gmail.com",


        },
        {
            "id": 3,
            "birthDate": "1959-12-03",
            "firstName": "Parto",
            "lastName": "Bamford",
            "gender": "M",
            "email": "parto@gmail.com",


        },
    ];

    getEmployees(): Employee[] {
        return this.Employees;
    }

    save(employee: Employee) {
        this.Employees.push(employee);
    }
}