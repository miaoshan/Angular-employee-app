import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
    name: 'employeeFilter'
})
// @Pipe decorate has two properties, name and pure. pure is optional, 
// defalut value is true when we create a new pipe, 
// if want to make the pipe impure, change its value to false.  


export class EmployeeFilterPipe implements PipeTransform {
    transform(employees: Employee[], searchTerm: string): Employee[] {
        if (!employees || !searchTerm) {
            return employees;
        }
        return employees.filter(employee =>
            employee.firstName.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
    }
}
