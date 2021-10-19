import { Component, OnInit } from '@angular/core';
import { Backlog } from '../Backlog';
import { BacklogserviceService } from '../backlogservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-view-backlog',
  templateUrl: './view-backlog.component.html',
  styleUrls: ['./view-backlog.component.css']
})
export class ViewBacklogComponent implements OnInit {

  
  backlogs:Backlog[];

  constructor(private service :BacklogserviceService,private loc:Location) { 
    this.service.getBacklogs().subscribe((p)=>this.backlogs=p);
  }
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }

}
