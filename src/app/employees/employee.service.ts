import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { Employee } from './employee';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class EmployeeService {
    private _employeeUrl = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees';

    constructor(private _http: HttpClient) {}

    getEmployees(): Observable<Employee[]> {
        return this._http.get<Employee[]>(this._employeeUrl)
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        return Observable.throw(err.message);
    }
}