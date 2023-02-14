import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit{
  id :any
  constructor(private employeeService : EmployeeService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
