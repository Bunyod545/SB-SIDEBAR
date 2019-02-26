import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SBSidebarModule } from 'src/sb-sidebar/sb-sidebar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SBSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
