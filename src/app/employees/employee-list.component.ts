import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    templateUrl: './employees.component.html'
})

export class EmployeeListComponent implements OnInit {

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService) { }

    pageTitle: string = 'Employees List';
    employees: Employee[] = [];
    errorMessage: string;

    ngOnInit(): void {
        let id = +this._route.snapshot.paramMap.get('id');
        this._employeeService.getEmployees()
            .subscribe(employees => 
            this.employees = employees.filter(employee => employee.departmentId === id),
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/departments']);
    }
}