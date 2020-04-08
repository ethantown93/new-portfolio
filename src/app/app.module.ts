import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { NavComponent } from './components/nav/nav.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

import { UpdateNavService } from './services/update-nav.service';

import { environment } from '../environments/environment';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import {HammerGestureConfig, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from './components/footer/footer.component';

@Injectable()
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'bread': {
      direction: Hammer.DIRECTION_ALL,
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    NavComponent,
    ProjectDetailsComponent,
    FooterComponent
  ],
  entryComponents: [ProjectDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [
    UpdateNavService,
    {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
