import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from './employee';
import { Department } from '../departments/department';
import { EmployeeService } from './employee.service';
import { DepartmentService } from '../departments/department.service';

@Component({
    templateUrl: './employees.component.html'
})

export class EmployeeListComponent implements OnInit {

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _departmentService: DepartmentService) { }

    pageTitle: string = 'Employees List';
    employees: Employee[] = [];
    department: Department;
    errorMessage: string;

    ngOnInit(): void {
        let id = +this._route.snapshot.paramMap.get('id');
        this._employeeService.getEmployees()
            .subscribe(employees => 
            this.employees = employees.filter(employee => employee.departmentId === id),
            error => this.errorMessage = <any>error);
        this._departmentService.getDepartments()
            .subscribe(departments => this.department = departments.find(d => d.id === id));
    }
    onBack(): void {
        this._router.navigate(['/departments']);
    }
}