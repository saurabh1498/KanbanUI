import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProjectComponent } from './add-project/add-project.component';
import { AddProjecttasksComponent } from './add-projecttasks/add-projecttasks.component';
import { AdminAuthGuard } from './admin-auth.guard';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BacklogComponent } from './backlog/backlog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteProjectTaskComponent } from './delete-project-task/delete-project-task.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { LoginComponent } from './login/login.component';
import { ManagerAuthGuard } from './manager-auth.guard';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ProjectTaskComponent } from './project-task/project-task.component';
import { ProjectComponent } from './project/project.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { SearchBacklogComponent } from './search-backlog/search-backlog.component';
import { SearchProjectTaskComponent } from './search-project-task/search-project-task.component';
import { SearchProjectComponent } from './search-project/search-project.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UpdateProjectTaskComponent } from './update-project-task/update-project-task.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { UpdateUserProjectTaskComponent } from './update-user-project-task/update-user-project-task.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserAuthGuard } from './user-auth.guard';
import { ViewBacklogComponent } from './view-backlog/view-backlog.component';
import { ViewProjectTaskComponent } from './view-project-task/view-project-task.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { ViewusersComponent } from './viewusers/viewusers.component';

const routes: Routes = [
  
  {
    path: '',component:LoginComponent
  },
  {
    path:'dashboard', canActivate:[UserAuthGuard],component:DashboardComponent
  },
  {
    path:'admindashboard',canActivate:[AdminAuthGuard], component:AdmindashboardComponent
  },
  {
    path:'managerdashboard', canActivate:[ManagerAuthGuard], component:ManagerDashboardComponent
  },





  


  {
    path: 'project', canActivate:[ManagerAuthGuard], component:ProjectComponent
  },
  {
    path: 'backlog', canActivate:[ManagerAuthGuard], component:BacklogComponent
  },
  {
    path: 'projecttask', canActivate:[ManagerAuthGuard], component:ProjectTaskComponent
  },
  
  




  {
    path: 'viewusers',canActivate:[AdminAuthGuard],component:ViewusersComponent
  },
  {
    path: 'viewprojects', canActivate:[ManagerAuthGuard], component:ViewProjectComponent
  },
  {
    path: 'viewprojecttasks', canActivate:[ManagerAuthGuard], component:ViewProjectTaskComponent
  },  
  {
    path: 'viewbacklogs', canActivate:[ManagerAuthGuard], component:ViewBacklogComponent
  },
 
 



  {
    path: 'searchuser',canActivate:[AdminAuthGuard],component:SearchUserComponent
  },
  {
    path: 'searchprojects', canActivate:[ManagerAuthGuard], component:SearchProjectComponent
  },
  {
    path: 'searchbacklogs', canActivate:[ManagerAuthGuard], component:SearchBacklogComponent
  },
  {
    path: 'searchprojecttasks', canActivate:[ManagerAuthGuard], component:SearchProjectTaskComponent
  },


//User Dashboard

{
  path: 'userviewprojects', canActivate:[UserAuthGuard], component:ViewProjectComponent
},
{
  path: 'userviewprojecttasks', canActivate:[UserAuthGuard], component:ViewProjectTaskComponent
},  
{
  path: 'userviewbacklogs', canActivate:[UserAuthGuard], component:ViewBacklogComponent
},
{
  path: 'usersearchprojects', canActivate:[UserAuthGuard], component:SearchProjectComponent
},
{
  path: 'usersearchbacklogs', canActivate:[UserAuthGuard], component:SearchBacklogComponent
},
{
  path: 'usersearchprojecttasks', canActivate:[UserAuthGuard], component:SearchProjectTaskComponent
},
{
  path: 'userupdateprojecttasks',canActivate:[UserAuthGuard],  component:UpdateUserProjectTaskComponent
},






////////////////////////////////



 
  {
    path: 'updateproject', canActivate:[ManagerAuthGuard], component:UpdateProjectComponent
  },
  {
    path: 'updateprojecttask', canActivate:[ManagerAuthGuard], component:UpdateProjectTaskComponent
  },
  {
    path: 'updateuser',canActivate:[AdminAuthGuard],component:UpdateUserComponent
  },




  {
    path: 'addproject', canActivate:[ManagerAuthGuard], component:AddProjectComponent
  },  {
    path: 'addprojecttask',  canActivate:[ManagerAuthGuard], component:AddProjecttasksComponent
  },
  {
    path: 'registeruser', component:RegisteruserComponent
  },

 


  {
    path: 'deleteuser',canActivate:[AdminAuthGuard],component:DeleteuserComponent
  },
  {
    path: 'deleteproject', canActivate:[ManagerAuthGuard], component:DeleteProjectComponent
  },
  {
    path: 'deleteprojecttask', canActivate:[ManagerAuthGuard], component:DeleteProjectTaskComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
