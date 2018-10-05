import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegistercollegeComponent } from './registercollege/registercollege.component';
const approutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'register/student', component: RegisterComponent},
    {path: 'register/teacher', component: RegisterTeacherComponent},
    {path: 'register/college', component: RegistercollegeComponent}
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
