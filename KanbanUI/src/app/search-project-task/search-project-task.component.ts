import { Component, OnInit } from '@angular/core';
import { ProjectTask } from '../ProjectTask';
import { ProjecttaskserviceService } from '../projecttaskservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search-project-task',
  templateUrl: './search-project-task.component.html',
  styleUrls: ['./search-project-task.component.css']
})
export class SearchProjectTaskComponent implements OnInit {
  constructor(private service:ProjecttaskserviceService,private loc:Location) { }

 
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
 
  projecttasks:ProjectTask[]=[];
  tasks:any;
  flag:boolean;
  flag1:boolean;
  msg:string;
  id:string;




  searchProject(): void{
    this.projecttasks= this.service.scrByProjectIdentifier(this.id);
     if(this.projecttasks.length)
      {
        this.flag1 = true;
      }else{
        this.flag=true;
        this.msg="Project Task with Project Identifier: "+this.id+" Not Found";
      }
        


  }
}