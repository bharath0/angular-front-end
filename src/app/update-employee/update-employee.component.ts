import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee : Employee = new Employee();
  id : number = 0;
  constructor(private employeeService : EmployeeService,
    private route : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployeeById();
  }

  getEmployeeById(){
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
       this.employee = data;
    },err => {
       console.log(err);
    })
  }

  onSubmit(){
    this.updateEmployee();
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToEmployeeList();
   },err => {
      console.log(err);
   })
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
