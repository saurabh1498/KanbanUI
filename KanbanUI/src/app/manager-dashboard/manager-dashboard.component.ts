import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {

  
  constructor(private route:Router) { }

    ngOnInit() {
    }
  
    logout():void{
  
     
          localStorage.removeItem('managerpassword');
          this.route.navigate(['']);

      }

}
