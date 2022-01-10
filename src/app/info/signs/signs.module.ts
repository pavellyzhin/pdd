import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignsComponent } from './signs/signs.component';
import { SignComponent } from './sign/sign.component';
import { SignGroupComponent } from './sign-group/sign-group.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SignsComponent, SignComponent, SignGroupComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SignsModule { }
