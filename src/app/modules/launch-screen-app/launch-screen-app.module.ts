import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchScreenAppRoutingModule } from './launch-screen-app-routing.module';
import { LaunchScreenAppComponent } from './launch-screen-app/launch-screen-app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HeaderPageComponent } from './header-component/header-page/header-page.component';
import { AnimatedHomeComponent } from './Components/animated-home/animated-home.component';
import { MailComponentComponent } from './Components/mail-component/mail-component.component';
import { AboutComponent } from './Components/about/about.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ExperienceComponent } from './Components/experience/experience.component';


@NgModule({
  declarations: [
    LaunchScreenAppComponent,
    HomePageComponent,
    HeaderPageComponent,
    AnimatedHomeComponent,
    MailComponentComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
 ],
  imports: [
    CommonModule,
    SharedModule,
    LaunchScreenAppRoutingModule
  ]
})
export class LaunchScreenAppModule { }
