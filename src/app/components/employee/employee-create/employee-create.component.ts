import { EmployeeServiceService } from './../service/employee-service.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  constructor(private employeeServiceService: EmployeeServiceService, private router: Router) {

   }

  ngOnInit(): void {
   
  }

  createEmployee(): void{
    this.employeeServiceService.showMessage("Service is being calling...");
  }
  cancel(): void{
   this.router.navigate(['/employees'])
  }
}
