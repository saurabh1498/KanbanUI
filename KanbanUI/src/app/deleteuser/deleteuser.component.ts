import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { usererviceService } from '../userservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {


  id: number;
  user:User=new User(); 
  flag:boolean=false;
  msg: string;


  constructor(private service: usererviceService,private loc:Location) { }

 
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
  deleteUser(): void{
    
    this.service.deleteUser(this.id).subscribe((e)=>this.user=e, (error: Response)=>{
      if(error.status==404){
        this.flag=true;
        this.msg="User with id "+this.id+" not found";
      }
      else if
      (error.status==406){
        this.flag=true;
        this.msg="Exception";
      }
    }
    );
    if(this.user==undefined){
      this.flag=true;
    this.msg="User Deleted Successfully !!!";
    
    }
  }
}
