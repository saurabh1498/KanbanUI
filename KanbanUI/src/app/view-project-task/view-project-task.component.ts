import { Component, OnInit } from '@angular/core';
import { ProjectTask } from '../ProjectTask';
import { ProjecttaskserviceService } from '../projecttaskservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-view-project-task',
  templateUrl: './view-project-task.component.html',
  styleUrls: ['./view-project-task.component.css']
})
export class ViewProjectTaskComponent implements OnInit {

  
  tasks:ProjectTask[];

  constructor(private service :ProjecttaskserviceService,private loc:Location) { 
    this.service.getProjectTasks().subscribe((p)=>this.tasks=p);
  }
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }

}