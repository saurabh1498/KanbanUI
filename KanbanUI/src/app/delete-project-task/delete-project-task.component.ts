import { Component, OnInit } from '@angular/core';
import { Backlog } from '../Backlog';
import { ProjectTask } from '../ProjectTask';
import { ProjecttaskserviceService } from '../projecttaskservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-delete-project-task',
  templateUrl: './delete-project-task.component.html',
  styleUrls: ['./delete-project-task.component.css']
})
export class DeleteProjectTaskComponent implements OnInit {

 
  id: number;
  projecttask:ProjectTask=new ProjectTask(); 
  flag:boolean=false;
  msg: string;
  backlog:Backlog=new Backlog();

  constructor(private service: ProjecttaskserviceService,private loc:Location) { }

 
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
  deleteProject(): void{
    
    this.service.deleteProjectTask(this.id).subscribe((e)=>this.projecttask=e, (error: Response)=>{
      if(error.status==404){
        this.flag=true;
        this.msg="Project Tasks with id "+this.id+" not found";
      }
      else if
      (error.status==406){
        this.flag=true;
        this.msg="Cannot delete Project Task delete associated tasks";
      }
    }
    );
    if(this.projecttask==undefined){
    this.msg="Project Task Deleted Successfully !!!";
    this.flag=true;
    }
  }
}