import { Backlog } from "./Backlog";

export class ProjectTask{
    id:number;
    projectSequence:string;
    summary:string;
    acceptanceCriteria:string;
    status:string;
    priority:string;
    projectIdentifier:string;
    dueDate:Date;
    createAt:Date;
    updateAt:Date;
    backlog:Backlog=new Backlog();

}
