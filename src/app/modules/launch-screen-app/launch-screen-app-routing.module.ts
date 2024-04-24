import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchScreenAppComponent } from './launch-screen-app/launch-screen-app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AnimatedHomeComponent } from './Components/animated-home/animated-home.component';
import { MailComponentComponent } from './Components/mail-component/mail-component.component';
import { AboutComponent } from './Components/about/about.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ExperienceComponent } from './Components/experience/experience.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'animated-home',
    pathMatch: 'full',
  },

  {
    path: 'animated-home',
    component: AnimatedHomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'mail-component',
    component: MailComponentComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchScreenAppRoutingModule {}
