import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VoterComponent } from './voter/voter.component';
import { DependComponent } from './depend/depend.component';


@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    DependComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
