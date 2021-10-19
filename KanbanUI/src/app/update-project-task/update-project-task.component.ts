import { Component, OnInit } from '@angular/core';
import { ProjectTask } from '../ProjectTask';
import { ProjecttaskserviceService } from '../projecttaskservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-project-task',
  templateUrl: './update-project-task.component.html',
  styleUrls: ['./update-project-task.component.css']
})
export class UpdateProjectTaskComponent implements OnInit {

  projecttask: ProjectTask= new ProjectTask();

  flag:boolean=false;
  
  constructor(private service: ProjecttaskserviceService,private loc:Location) { }

 
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
  yes:number;
  msg:string;
  id:number;
  exists:boolean = false;
 

  findById():void{
    this.projecttask = this.service.findProjectTaskbyId(this.id);
    if(this.projecttask!=null){
      this.exists = true;
    }
    if(!this.exists){
      this.yes = 2;
      this.msg = "Project Task Id not found !!!!"
    }
  }
  update():void{
    this.yes=1;
    this.service.updateProjectTask(this.projecttask).subscribe((dc)=>this.projecttask=dc);
   
    this.msg = "Project Task Details Updated Successfully....";
  }
}
