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
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    RegistercollegeComponent,
    NavComponent,
    CreateEventsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
