import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { usererviceService } from '../userservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {


  user: User= new User();

  flag:boolean=false;
  
  constructor(private service: usererviceService,private loc:Location) { }

 
  ngOnInit() {
  }
  back()
  {
    this.loc.back();
  }
  
  yes:number;
  msg:string;
  id:string;
  exists:boolean = false;
 

  findById():void{
   this.service.findUserByLoginName(this.id).subscribe((p)=>{this.user=p;
    
    if(this.user!=null){
      this.exists = true;
    }
    if(!this.exists){
      this.yes = 2;
      this.msg = "User not found !!!!"
    }

    });
    
  }
  update():void{
    this.yes=1;
    this.service.updateUser(this.user).subscribe((dc)=>this.user=dc);
   
    this.msg = "User Details Updated Successfully....";
  }
}