import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class usererviceService {


  url:string=`${baseUrl}`+"users/";
  users:User[]=[];

  constructor(private h:HttpClient) {
    this.h.get<any>(this.url).subscribe((p)=>this.users=p);
   }
   public getusers():Observable<any>
   {
     return this.h.get<any>(this.url);
   }
   public addUser(user:User):Observable<any>
   {
     return this.h.post(this.url,user, {responseType:'text'});
   }
 
  public deleteUser(id:number):Observable<any>{
    return this.h.delete(this.url+id);
  }
  public updateUser(user:User):Observable<any>
  {
   
    return this.h.post(this.url,user, {responseType:'text'});
  }

  public validateUser(loginname:string,password:string):Observable<boolean>{
    return this.h.get<boolean>(this.url+"validateuser/"+loginname+"/"+password);
  }
  
  public findUserByLoginName(loginname:string):Observable<any>{
    return this.h.get(this.url+"loginname/"+loginname);
  }

  scrByLoginName(loginname:string):User[]{
    return this.users.filter((b)=>b.loginname.startsWith(loginname));
  }
    scrByRole(role:string):User[]{
    return this.users.filter((b)=>b.role.startsWith(role));
  }

}
