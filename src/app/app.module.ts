import { ProfileService } from './services/profile.service';
import { NotificationsService } from './services/notifications.service';
import { RefMaterialService } from './services/refmaterial.service';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule, FormArray, FormBuilder } from '@angular/forms';
import { RegistercollegeComponent } from './registercollege/registercollege.component';
import { NavComponent } from './nav/nav.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateEventsComponent } from './create-events/create-events.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AuthService } from './services/auth.service';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';
import { TeacherNavComponent } from './teacher-nav/teacher-nav.component';
import { ReferenceMaterialComponent } from './reference-material/reference-material.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { CalendarMonthViewComponent } from './calendar-month-view/calendar-month-view.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { EventsService } from './services/events.sevice';
import { AttendanceService } from './services/attendance.service';
import { EntryNavComponent } from './entry-nav/entry-nav.component';
import { GetAttendanceComponent } from './get-attendance/get-attendance.component';
import { GetEventsComponent } from './get-events/get-events.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    RegistercollegeComponent,
    NavComponent,
    CreateEventsComponent,
    NotificationsComponent,
    UpdateAttendanceComponent,
    TeacherNavComponent,
    ReferenceMaterialComponent,
    RegisterTeacherComponent,
    CalendarComponent,
    // CalendarMonthViewComponent,
    CalendarHeaderComponent,
    EntryNavComponent,
    GetAttendanceComponent,
    GetEventsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModalModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlatpickrModule.forRoot(),
    HttpModule
  ],
  providers: [
    AuthService,
    EventsService,
    AttendanceService,
    RefMaterialService,
    NotificationsService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
