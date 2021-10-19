import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';
import { ProjectserviceService } from '../projectservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  project: Project= new Project();

  flag:boolean=false;
  
  constructor(private service: ProjectserviceService,private loc:Location) { }

 
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
  
  yes:number;
  msg:string;
  id:string;
  exists:boolean = false;
 

  findById():void{
   


    this.service.findproject(this.id).subscribe((e)=>{this.project=e;
      if(this.project!=null){
        this.exists = true;
      }
      if(!this.exists){
        this.yes = 2;
        this.msg = "Project Id not found !!!!"
      }});


    

    
  }
  update():void{
    this.yes=1;
    this.service.updateProject(this.project).subscribe((dc)=>this.project=dc);
   
    this.msg = "Project Details Updated Successfully....";
  }
}