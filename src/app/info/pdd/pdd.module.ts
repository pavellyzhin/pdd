import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PddComponent } from './pdd/pdd.component';
import { PunktComponent } from './punkt/punkt.component';
import { PodpunktComponent } from './podpunkt/podpunkt.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PddComponent, PunktComponent, PodpunktComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PddModule { }
