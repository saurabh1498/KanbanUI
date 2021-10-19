import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { ProjectTask } from './ProjectTask';

@Injectable({
  providedIn: 'root'
})
export class ProjecttaskserviceService {


 
  url:string=`${baseUrl}`+"projecttasks/";
  projecttasks:ProjectTask[]=[];

  constructor(private h:HttpClient) {
    this.h.get<any>(this.url).subscribe((p)=>this.projecttasks=p);
   }



  public getProjectTasks():Observable<any>
  {
    return this.h.get<any>(this.url);
  }


  public addProjectTasks(projecttask:ProjectTask):Observable<any>
  {
    return this.h.post(this.url,projecttask, {responseType:'text'});
  }


  public findProjectTasks(id:number):Observable<any>{
    return this.h.get(this.url+id);
  }
  public deleteProjectTask(id:number):Observable<any>{
    return this.h.delete(this.url+id);
  }

  public findprojectTask(projectIdentifier:string):Observable<any>{
    return this.h.get(this.url+"identifier/"+projectIdentifier);
  }

  public updateProjectTask(projecttask:ProjectTask):Observable<any>
  {
    return this.h.post(this.url,projecttask, {responseType:'text'});
  }
  public findProjectTaskbyId(id:number):ProjectTask{
    
    let projecttask:ProjectTask = this.projecttasks.find((b)=>b.id==id);
    if(projecttask!=null){
      return projecttask;
    }
    return null;
  }



  public scrByProjectIdentifier(id:string):ProjectTask[]{
    return this.projecttasks.filter((b)=>b.projectIdentifier.startsWith(id));
  }

}
