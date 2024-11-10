import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EducationComponent } from './education/education.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjekteComponent } from './projekte/projekte.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    EducationComponent,
    NotFoundComponent,
    ProjekteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
