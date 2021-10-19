import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { usererviceService } from '../userservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
  users:User[];
 
  constructor(private service:usererviceService,private loc:Location) { 
    this.service.getusers().subscribe((dc)=>this.users=dc);
  }

  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
}
