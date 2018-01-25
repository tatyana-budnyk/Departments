import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { Department } from './department';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class DepartmentService {
    private _departmentUrl = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments';

    constructor(private _http: HttpClient) { }

    getDepartments(): Observable<Department[]> {
        return this._http.get<Department[]>(this._departmentUrl)
            ._catch(this.handleError);
    }

    addDepartment(department: Department):Observable<Department> {
        return this._http.post<Department[]>(this._departmentUrl, department)
        ._catch(this.handleError);
    }

    deleteDepartment(department: Department | number):Observable<Department[]> {
        const id = typeof department === 'number' ? department : department.id;
        const url = `${this._departmentUrl}/${id}`;
        return this._http.delete<Department[]>(url)
            ._catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        return Observable.throw(err.message);
    }
}