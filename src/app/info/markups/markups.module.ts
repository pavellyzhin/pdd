import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkupsComponent } from './markups/markups.component';
import { MarkupGroupComponent } from './markup-group/markup-group.component';
import { MarkupComponent } from './markup/markup.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MarkupsComponent, MarkupGroupComponent, MarkupComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MarkupsModule { }
