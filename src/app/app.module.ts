import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { InfoModule } from './info/info.module';
import { MemorizeModule } from './memorize/memorize.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ManageDataService } from './manage-data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    InfoModule,
    MemorizeModule
  ],
  providers: [ManageDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
