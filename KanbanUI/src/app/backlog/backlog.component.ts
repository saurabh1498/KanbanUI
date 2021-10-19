import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {

  
  constructor(private loc:Location) { }

  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }

}
