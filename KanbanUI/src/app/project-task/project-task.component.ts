import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.css']
})
export class ProjectTaskComponent implements OnInit {


  constructor(private loc:Location) { }

 
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
}

