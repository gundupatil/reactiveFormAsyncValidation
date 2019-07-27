import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataShareService } from './dataService.sevice';
import { CustomValidator } from './validatecustom';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,ReactiveFormsModule
  ],
  providers: [DataShareService, CustomValidator],
  bootstrap: [AppComponent]
})
export class AppModule { }
