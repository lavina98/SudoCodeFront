import { CreateEventsComponent } from './create-events/create-events.component';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegistercollegeComponent } from './registercollege/registercollege.component';
import { ReferenceMaterialComponent } from './reference-material/reference-material.component';
import { NotificationsComponent } from './notifications/notifications.component';
const approutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'register/student', component: RegisterComponent},
    {path: 'register/teacher', component: RegisterTeacherComponent},
    {path: 'register/college', component: RegistercollegeComponent},
    {path: 'teacher/attendance', component: UpdateAttendanceComponent},
    {path: 'teacher/referencematerial', component: ReferenceMaterialComponent},
    {path: 'teacher/createevents', component: CreateEventsComponent},
    {path: 'student/notification', component: NotificationsComponent}
];
@NgModule({

  imports: [
      RouterModule.forRoot(approutes)],
  exports: [
      RouterModule
  ]
})


export class AppRoutingModule {

}
