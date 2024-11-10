import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

import { AboutmeComponent } from './app/aboutme/aboutme.component';
import { EducationComponent } from './app/education/education.component';
import { ProjekteComponent } from './app/projekte/projekte.component';
import { NotFoundComponent } from './app/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: AboutmeComponent }, // Default route
  { path: 'about-me', component: AboutmeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'projects', component: ProjekteComponent },
  { path: '**', component: NotFoundComponent } // Wildcard for 404 not found
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
