import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';
import { ProjectserviceService } from '../projectservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search-project',
  templateUrl: './search-project.component.html',
  styleUrls: ['./search-project.component.css']
})
export class SearchProjectComponent implements OnInit {
  constructor(private service:ProjectserviceService,private loc:Location) { }

 
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
  project:Project=new Project();
  projects:any;
  flag:boolean;
  flag1:boolean;
  msg:string;
  id:string;

  view():void{
    this.flag = true;
    this.projects = this.service.getProjects();
  }


  searchProject(): void{
    this.service.findproject(this.id).subscribe((e)=>this.project=e, (error:Response)=>{
      if(error.status==404){
        this.flag = true;
        this.flag1 = false;
        this.msg = "Project "+this.id+" not found";
      }
      else if(error.status==400){
        this.flag = true;
        this.flag1 = false;
        this.msg = "Id cannot be Empty";
      }
    });
    if(this.project!=undefined){
      this.flag=false;
      this.flag1=true;
    }
  }
 
}