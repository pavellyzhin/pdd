import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoMenuComponent } from './info-menu/info-menu.component';
import { InfoComponent } from './info/info.component';
import { PddModule } from './pdd/pdd.module';
import { RouterModule } from '@angular/router';
import { SignsModule } from './signs/signs.module';
import { MarkupsModule } from './markups/markups.module';



@NgModule({
  declarations: [InfoMenuComponent, InfoComponent],
  imports: [
    CommonModule,
    PddModule,
    RouterModule,
    SignsModule,
    MarkupsModule
  ]
})
export class InfoModule { }
