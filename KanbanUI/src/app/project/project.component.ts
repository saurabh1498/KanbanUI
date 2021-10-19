import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  constructor(private loc:Location) { }

 
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
}
