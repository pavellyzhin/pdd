import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemorizeComponent } from './memorize/memorize.component';
import { MemorizeMenuComponent } from './memorize-menu/memorize-menu.component';
import { MemorizeSignComponent } from './memorize-sign/memorize-sign.component';
import { MemorizeMarkupComponent } from './memorize-markup/memorize-markup.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MemorizeComponent,
    MemorizeMenuComponent, 
    MemorizeSignComponent, 
    MemorizeMarkupComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MemorizeModule { }
