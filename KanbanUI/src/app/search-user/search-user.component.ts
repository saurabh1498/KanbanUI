import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { usererviceService } from '../userservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

 
  constructor(private service:usererviceService,private loc:Location) { }

 
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
 
 user:User=new User();
users:User[]=[];
  flag:boolean;
  flag1:boolean;
  msg:string;
  loginname:string;
role:string;
  


  searchUser(): void{
    this.users=this.service.scrByLoginName(this.loginname);
    if(this.users.length==0){
          this.flag = true;
          this.flag1 = false;
          this.msg = "User "+this.loginname+" not found";
        }
      else {
        this.flag1=true;
      }
 
  }


  searchUserByRole():void{
    this.users=this.service.scrByRole(this.role);
    if(this.users.length==0){
          this.flag = true;
          this.flag1 = false;
          this.msg = "User "+this.role+" not found";
        }
      else {
        this.flag1=true;
      }
 
  }
  }
 


