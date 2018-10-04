import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ViewTaskComponent } from './view-task/view-task.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
   
    ViewTaskComponent
  ],
  imports: [
    BrowserModule, HttpClientModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
