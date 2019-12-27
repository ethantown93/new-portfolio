import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { DevopsPresentationsComponent } from './components/devops-presentations/devops-presentations.component';
import { LoginComponent } from './components/login/login.component';
import { ResumeComponent } from './components/resume/resume.component';
import { MessagesComponent } from './components/messages/messages.component';

import { RoleGuardService } from './guards/role.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
    redirectTo: ''
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'devops-presentations',
    component: DevopsPresentationsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [RoleGuardService]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
