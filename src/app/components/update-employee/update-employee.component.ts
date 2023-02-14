import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  id : any;
  employee: Employee|any = new Employee();

  constructor(private employeeService : EmployeeService , private activatedRouter : ActivatedRoute, private router : Router){}

    ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params["id"];
      this.employeeService.getEmployeeById(this.id).subscribe( result =>{
        this.employee = result;
      })
      
    }

    onSubmit(){
      this.employeeService.updateEmployee(this.id, this.employee).subscribe(result =>{
        this.goToEmployeeList();
      } ,error => console.log(error));
    
    }

    goToEmployeeList(){
      this.router.navigate(['/employees']);
    }
  
}
