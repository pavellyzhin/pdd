import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InfoMenuComponent } from './info/info-menu/info-menu.component';
import { InfoComponent } from './info/info/info.component';
import { MarkupGroupComponent } from './info/markups/markup-group/markup-group.component';
import { MarkupComponent } from './info/markups/markup/markup.component';
import { MarkupsComponent } from './info/markups/markups/markups.component';
import { PddComponent } from './info/pdd/pdd/pdd.component';
import { PodpunktComponent } from './info/pdd/podpunkt/podpunkt.component';
import { PunktComponent } from './info/pdd/punkt/punkt.component';
import { SignGroupComponent } from './info/signs/sign-group/sign-group.component';
import { SignComponent } from './info/signs/sign/sign.component';
import { SignsComponent } from './info/signs/signs/signs.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MemorizeMarkupComponent } from './memorize/memorize-markup/memorize-markup.component';
import { MemorizeMenuComponent } from './memorize/memorize-menu/memorize-menu.component';
import { MemorizeSignComponent } from './memorize/memorize-sign/memorize-sign.component';
import { MemorizeComponent } from './memorize/memorize/memorize.component';


const routes: Routes = [
              { path: '', component:MainMenuComponent },
              { path: 'i', component: InfoComponent, children: [
                { path: '', component: InfoMenuComponent },
                { path: 'pdd', component: PddComponent },
                { path: 'pdd/:punktId', component: PunktComponent },
                { path: 'pdd/:punktId/:podPunktId', component: PodpunktComponent },
                { path: 'signs', component: SignsComponent },
                { path: 'signs/:signGroupId' , component: SignGroupComponent },
                { path: 'signs/:signGroupId/:signId' , component: SignComponent },
                { path: 'markups', component: MarkupsComponent },
                { path: 'markups/:markupGroupId' , component: MarkupGroupComponent },
                { path: 'markups/:markupGroupId/:markupId' , component: MarkupComponent }
              ]},
              { path: 'm' , component: MemorizeComponent, children: [
                { path: '', component: MemorizeMenuComponent },
                { path: 'sign', component: MemorizeSignComponent },
                { path: 'markup', component: MemorizeMarkupComponent }
              ]},
              { path: 'about', component: AboutComponent }
            ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }