import { Component } from '@angular/core';
import { DepartmentService } from './departments/department.service';
import { EmployeeService } from './employees/employee.service'

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  providers: [DepartmentService, EmployeeService]
})
export class AppComponent {
  pageTitle = 'Departments';
}
