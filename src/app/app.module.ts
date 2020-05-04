import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonComponentsModule} from "./common-components.module/common.module";
import { WrapperComponent } from './wrapper/wrapper.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ScrollDispatcher, ScrollingModule} from '@angular/cdk/scrolling';
import {Platform} from "@angular/cdk/platform";


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    HttpClientModule,
    ScrollingModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    ScrollDispatcher,
    Platform
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
