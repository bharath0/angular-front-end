import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[] | undefined;

  constructor(private employeeService : EmployeeService,
    private router : Router) { }

  ngOnInit(): void {
    this.getListOfEmployees();
  }

  private getListOfEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees = data;
    },err => {
      console.log(err);
    })
  }


  updateEmployee(id : number | undefined){
     this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id: number | undefined){
    this.employeeService.deleteEmployee(id).subscribe( data => {
    this.getListOfEmployees();
    },err => {
      console.log(err)
    })
  }


  viewEmployee(id : number | undefined){
    this.router.navigate(['view-employee',id]);
  }

}
