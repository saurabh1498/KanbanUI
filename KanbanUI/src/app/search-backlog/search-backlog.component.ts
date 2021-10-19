import { Component, OnInit } from '@angular/core';
import { Backlog } from '../Backlog';
import { BacklogserviceService } from '../backlogservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search-backlog',
  templateUrl: './search-backlog.component.html',
  styleUrls: ['./search-backlog.component.css']
})
export class SearchBacklogComponent implements OnInit {

  constructor(private service:BacklogserviceService,private loc:Location) { }

 
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
 
  backlog:Backlog=new Backlog();
  backlogs:any;
  flag:boolean;
  flag1:boolean;
  msg:string;
  id:string;

  view():void{
    this.flag = true;
    this.backlogs = this.service.getBacklogs();
  }


  searchBacklog(): void{
    this.service.findBacklogByIdentifier(this.id).subscribe((e)=>this.backlog=e, (error:Response)=>{
      if(error.status==404){
        this.flag = true;
        this.flag1 = false;
        this.msg = "Backlog with Project Identifier "+this.id+" not found";
      }
      else if(error.status==400){
        this.flag = true;
        this.flag1 = false;
        this.msg = "Id cannot be Empty";
      }
    });
    if(this.backlog!=undefined){
      this.flag=false;
      this.flag1=true;
    }
  }
 
}