import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { usererviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private s:usererviceService,private routes:Router) { }
flag:boolean=false;
  msg:any;
  op:any;
  auth:boolean=false;
  user:User=new User()
  role:string;
  loginname:string;

  ngOnInit() {
  }

 

  validate():void
  {
    this.loginname=this.user.loginname;
      this.s.validateUser(this.user.loginname, this.user.password).subscribe((p)=>{ this.op=p;

        if(this.op==true){
          console.log(this.user.loginname);
         
          this.afterValidation();
  
        }  else{
          this.flag=true;
         this.msg ='Invalid Username or Password !!';
  
            }

      });
   
    }
  afterValidation( ):void
      {
        this.s.findUserByLoginName(this.loginname).subscribe((p)=>{this.user=p;
          if(this.user.status=="active")
          {
                if(this.user.role=="admin")
                {
                  localStorage.setItem('adminpassword',this.user.password);
                  this.routes.navigate(['/admindashboard']);
                }
              else if(this.user.role=="manager")
              {
                localStorage.setItem('managerpassword',this.user.password);
                this.routes.navigate(['/managerdashboard']);

              }
              else if(this.user.role=="user")
              {
                localStorage.setItem('password',this.user.password);
                this.routes.navigate(['/dashboard']);

              }
          }
          else{
            this.flag=true
            this.msg="Your Account is Deactivated contact Administrator";
          }
        });

        
          
         

        }
}      
  
  
  
  