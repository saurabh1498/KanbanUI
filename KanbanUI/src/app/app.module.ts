import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { FormsModule } from '@angular/forms';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { ViewBacklogComponent } from './view-backlog/view-backlog.component';
import { AddProjecttasksComponent } from './add-projecttasks/add-projecttasks.component';
import { DeleteProjectTaskComponent } from './delete-project-task/delete-project-task.component';
import { ViewProjectTaskComponent } from './view-project-task/view-project-task.component';
import { UpdateProjectTaskComponent } from './update-project-task/update-project-task.component';
import { SearchProjectComponent } from './search-project/search-project.component';
import { SearchProjectTaskComponent } from './search-project-task/search-project-task.component';
import { SearchBacklogComponent } from './search-backlog/search-backlog.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { BacklogComponent } from './backlog/backlog.component';
import { ProjectTaskComponent } from './project-task/project-task.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { UpdateUserProjectTaskComponent } from './update-user-project-task/update-user-project-task.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewProjectComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    DeleteProjectComponent,
    ViewBacklogComponent,
    AddProjecttasksComponent,
    DeleteProjectTaskComponent,
    ViewProjectTaskComponent,
    UpdateProjectTaskComponent,
    SearchProjectComponent,
    SearchProjectTaskComponent,
    SearchBacklogComponent,
    LoginComponent,
    AdmindashboardComponent,
    DashboardComponent,
    ProjectComponent,
    BacklogComponent,
    ProjectTaskComponent,
    ViewusersComponent,
    RegisteruserComponent,
    DeleteuserComponent,
    SearchUserComponent,
    UpdateUserComponent,
    ManagerDashboardComponent,
    UpdateUserProjectTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
