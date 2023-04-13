import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MiddleComponent } from './middle/middle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MiddleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {
  }
  ngOnInit(): void {  
  }
}
