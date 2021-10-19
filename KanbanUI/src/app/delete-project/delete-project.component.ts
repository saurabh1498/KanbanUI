import { Component, OnInit } from '@angular/core';
import { Backlog } from '../Backlog';
import { Location } from '@angular/common';
import { Project } from '../Project';
import { ProjectserviceService } from '../projectservice.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {

 
  id: number;
  project:Project=new Project(); 
  flag:boolean=false;
  msg: string;
  backlog:Backlog=new Backlog();

  constructor(private service: ProjectserviceService,private loc:Location) { }

 
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
  deleteProject(): void{
    
    this.service.deleteProject(this.id).subscribe((e)=>this.project=e, (error: Response)=>{
      if(error.status==404){
        this.flag=true;
        this.msg="Project with id "+this.id+" not found";
      }
      else if
      (error.status==406){
        this.flag=true;
        this.msg="Cannot delete Project delete associated tasks";
      }
    }
    );
    if(this.project==undefined){
    this.msg="Project Deleted Successfully !!!";
    this.flag=true;
    }
  }
}
