import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from "./hello/hello.component";
import { CursoAngularComponent } from './curso-angular/curso-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CursoAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
