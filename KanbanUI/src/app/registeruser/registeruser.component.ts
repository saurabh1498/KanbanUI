import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { usererviceService } from '../userservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  user:User=new User();
  flag:boolean=false;
  message:string;
  flag1:boolean=false;

users:User[]=[];
  constructor(private service:usererviceService,private loc:Location) { }

 
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
  submitform():void{

    this.users=this.service.scrByLoginName(this.user.loginname);
  if(this.users.length==0)
  {
    this.flag=true;
    this.message="User added successfully";
     this.service.addUser(this.user).subscribe((dc)=>this.user=dc);
  

  }else{
    this.flag=true;
    this.message="Login name already exist choose another one";
  }

  }

}
