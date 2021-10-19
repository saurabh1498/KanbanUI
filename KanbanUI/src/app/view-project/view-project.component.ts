import { Component, OnInit } from '@angular/core';
import { Backlog } from '../Backlog';
import { Project } from '../Project';
import { ProjectserviceService } from '../projectservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  projects:Project[];
  backlog:Backlog=new Backlog();

  constructor(private service :ProjectserviceService,private loc:Location) { 
    this.service.getProjects().subscribe((p)=>this.projects=p);
  }

  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
}
