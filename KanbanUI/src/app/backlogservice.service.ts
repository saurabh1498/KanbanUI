import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Backlog } from './Backlog';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BacklogserviceService {

 
  url:string=`${baseUrl}`+"backlogs/";
  backlogs:Backlog[]=[];

  constructor(private h:HttpClient) {
    this.h.get<any>(this.url).subscribe((p)=>this.backlogs=p);
   }



  public getBacklogs():Observable<any>
  {
    return this.h.get<any>(this.url);
  }


  public addBacklog(backlog:Backlog):Observable<any>
  {
    return this.h.post(this.url,backlog, {responseType:'text'});
  }


  public findBacklog(id:number):Observable<any>{
    return this.h.get(this.url+id);
  }

  public findBacklogByIdentifier(projectIdentifier:string):Observable<any>{
    return this.h.get(this.url+"identifier/"+projectIdentifier);
  }

  public deleteBacklog(id:number):Observable<any>{
    return this.h.delete(this.url+id);
  }


  public updateBacklog(backlog:Backlog):Observable<any>
  {
   // alert(Backlog.dcName);
    return this.h.post(this.url,backlog, {responseType:'text'});
  }

  
  scrById(id:number):Backlog[]{
    return this.backlogs.filter((b)=>b.id.toString().startsWith(id.toString()));
  }

  // scrByName(name:string):Backlog[]{
  //   return this.Backlogs.filter((b)=>b.dcName.toString().startsWith(name.toString()));
  // }

  // scrByAddress(address:string):Backlog[]{
  //   return this.Backlogs.filter((b)=>b.dcAddress.toString().startsWith(address.toString()));
  // }

  public findBacklogbyId(id:number):Backlog{
    let backlog:Backlog = this.backlogs.find((b)=>b.id==id);
    if(backlog!=null){
      return backlog;
    }
    return null;
  }
}
