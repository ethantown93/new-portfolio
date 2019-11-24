import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { DevopsPresentationsComponent } from './components/devops-presentations/devops-presentations.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
