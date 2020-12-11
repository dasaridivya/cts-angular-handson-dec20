import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { StudentComponent } from './student/student.component';
import {findresult}from  './student/findresult';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    StudentComponent,
    findresult
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
