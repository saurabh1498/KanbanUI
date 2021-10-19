import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Project } from './Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {

 
  url:string=`${baseUrl}`+"projects/";
  projects:Project[]=[];

  constructor(private h:HttpClient) {
    this.h.get<any>(this.url).subscribe((p)=>this.projects=p);
   }



  public getProjects():Observable<any>
  {
    return this.h.get<any>(this.url);
  }


  public addProject(project:Project):Observable<any>
  {
    return this.h.post(this.url,project, {responseType:'text'});
  }


  public findProject(id:number):Observable<any>{
    return this.h.get(this.url+id);
  }
  public findproject(projectIdentifier:string):Observable<any>{
    return this.h.get(this.url+"identifier/"+projectIdentifier);
  }


  public deleteProject(id:number):Observable<any>{
    return this.h.delete(this.url+id);
  }


  public updateProject(project:Project):Observable<any>
  {
   // alert(Project.dcName);
    return this.h.post(this.url,project, {responseType:'text'});
  }

  
  scrById(id:number):Project[]{
    return this.projects.filter((b)=>b.id.toString().startsWith(id.toString()));
  }
  scrByIdentifier(projectIdentifier:string):Project[]{
    return this.projects.filter((b)=>b.projectIdentifier.toString().startsWith(projectIdentifier.toString()));
  }

  // scrByName(name:string):Project[]{
  //   return this.Projects.filter((b)=>b.dcName.toString().startsWith(name.toString()));
  // }

  // scrByAddress(address:string):Project[]{
  //   return this.Projects.filter((b)=>b.dcAddress.toString().startsWith(address.toString()));
  // }

  public findProjectbyId(id:number):Project{
    
    let project:Project = this.projects.find((b)=>b.id==id);
    if(project!=null){
      return project;
    }
    return null;
  }
  public findProjectbyIdentifier(identifier: string):Project{
    this.h.get<any>(this.url).subscribe((p)=>this.projects=p);
    let project:Project = this.projects.find((b)=>b.projectIdentifier==identifier);
    if(project!=null){
      return project;
    }
    return null;
  }
}
