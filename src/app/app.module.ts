import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DepartmentListComponent } from './departments/department-list.component';
import { EmployeeListComponent } from './employees/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'departments', component: DepartmentListComponent},
      { path: 'departments/:id', component: EmployeeListComponent},
      { path: '', redirectTo: 'departments', pathMatch: 'full'},
      { path: '**', redirectTo: 'departments', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
