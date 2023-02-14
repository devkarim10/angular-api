import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees:Employee[] | any;
  constructor(private employeeService : EmployeeService , private router : Router){}

  ngOnInit(): void {
      this.getEmployeeList();
  }

  getEmployeeList(){
    this.employeeService.getAllEmployees().subscribe(result =>{
      this.employees = result;
      console.log(this.employees);
      
    })
  }
  updateEmployee(id :number){
    this.router.navigate(["edit-employee",id])
  }

  deleteEmployee(id : number){
      this.employeeService.deleteEmployee(id).subscribe(result =>{
        console.log(result);
        this.getEmployeeList();
      })
  }

}
