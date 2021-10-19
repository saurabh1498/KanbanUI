import { Component, OnInit } from '@angular/core';
import { Backlog } from '../Backlog';
import { ProjectTask } from '../ProjectTask';
import { ProjecttaskserviceService } from '../projecttaskservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-projecttasks',
  templateUrl: './add-projecttasks.component.html',
  styleUrls: ['./add-projecttasks.component.css']
})
export class AddProjecttasksComponent implements OnInit {

  projecttask:ProjectTask=new ProjectTask();

  message:string;


  constructor(private pservice:ProjecttaskserviceService,private loc:Location) { }

  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }

  submitform():void{
   
    this.pservice.addProjectTasks(this.projecttask).subscribe((dc)=>this.projecttask=dc);
 

  }


}
