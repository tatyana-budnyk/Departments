import { Component, OnInit } from '@angular/core';
import { Department } from './department';
import { DepartmentService } from './department.service';

@Component({
    templateUrl: './department-list.component.html',
    styleUrls: ['./department-list.component.css']
})

export class DepartmentListComponent implements OnInit {

    constructor(private _departmentService: DepartmentService) { }

    pageTitle: string = 'Department List';
    departments: Department[] = [];
    errorMessage: string;

    ngOnInit(): void {
        this._departmentService.getDepartments()
            .subscribe(departments => this.departments = departments,
            error => this.errorMessage = <any>error);
    }

    add(name: string, description: string): void {
        if (!name) { return; }
        this._departmentService.addDepartment({ name, description } as Department)
            .subscribe(department => this.departments.push(department));
    }

    delete(department: Department): void {
        this._departmentService.deleteDepartment(department).subscribe();
        this.departments = this.departments.filter(element => element !== department);
    }
}