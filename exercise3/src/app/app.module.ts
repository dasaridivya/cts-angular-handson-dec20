import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentcounterComponent } from './parentcounter/parentcounter.component';
import { ChildcounterComponent } from './childcounter/childcounter.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentcounterComponent,
    ChildcounterComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
