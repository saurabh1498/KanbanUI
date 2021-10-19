import { Component, OnInit } from '@angular/core';
import { Backlog } from '../Backlog';
import { BacklogserviceService } from '../backlogservice.service';
import { Project } from '../Project';
import { ProjectserviceService } from '../projectservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  project:Project=new Project();
  projects:Project[];
  
  backlog:Backlog=new Backlog();
  message:string;


  constructor(private pservice:ProjectserviceService,private bservice:BacklogserviceService,private loc:Location) { }

  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }


  submitform():void{
    this.backlog.projectIdentifier=this.project.projectIdentifier
    this.project.backlog=this.backlog;
    this.pservice.addProject(this.project).subscribe((dc)=>this.project=dc);
 

  }
 
}
