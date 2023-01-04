import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ProjectsComponent } from './projects/projects.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
import { AllAboutComponent } from './about-me/all-about/all-about.component';


@NgModule({
  declarations: [
    AboutMeComponent,
    KnowledgeComponent,
    ProjectsComponent,
    AllAboutComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    IonicModule,
    FormsModule,
    SwiperModule,
    HttpClientModule

  ],
  exports:[
    AboutMeComponent,
    KnowledgeComponent,
    ProjectsComponent,
    AllAboutComponent
  ]
})
export class ModulesModule { }
