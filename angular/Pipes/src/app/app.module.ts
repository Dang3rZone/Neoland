import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VueltaPipe } from './vuelta.pipe';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VueltaPipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
