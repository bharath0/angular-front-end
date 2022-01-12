import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1-0-0/employees";

  constructor( private httpclient : HttpClient) { }


  getEmployeeList() : Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(`${this.baseUrl}`);
  }


  createEmployee(employee : Employee) : Observable<any>{
    return this.httpclient.post(`${this.baseUrl}`, employee);
  }


  getEmployeeById(id: number): Observable<Employee>{
    return this.httpclient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number,employee : Employee) : Observable<any>{
    return this.httpclient.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number | undefined): Observable<any>{
    return this.httpclient.delete<any>(`${this.baseUrl}/${id}`);
  }

}
