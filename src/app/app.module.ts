import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TagService} from './tag.service';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ChildComponent } from './child/child.component';
import { ChlidtwoComponent } from './chlidtwo/chlidtwo.component';
import {HttpClientModule} from '@angular/common/http';
import{AppRouteModule} from './app.route.module'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChlidtwoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRouteModule
  ],
  providers: [TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
