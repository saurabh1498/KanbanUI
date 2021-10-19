import { Backlog } from "./Backlog";

export class Project{
    id:number;
    projectName:string;
    projectIdentifier:string;
    description:string;
    startDate:Date;
    endDate:Date;
    createAt:Date;
    updateAt:Date;
    backlog:Backlog=new Backlog();
}