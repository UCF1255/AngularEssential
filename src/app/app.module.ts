import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { BehaviorsubjectComponent } from './behaviorsubject/behaviorsubject.component';
import { ReplaysubjectComponent } from './replaysubject/replaysubject.component';
import { Comp1Component } from './subjects/comp1/comp1.component';
import { Comp2Component } from './subjects/comp2/comp2.component';
import { Comp3Component } from './subjects/comp3/comp3.component';
import { Comp4Component } from './subjects/comp4/comp4.component';
import { ResponsiveformComponent } from './responsiveform/responsiveform.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Demo} from './Pipes/demo.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PromiseComponent,
    ObservablesComponent,
    SubjectsComponent,
    BehaviorsubjectComponent,
    ReplaysubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    ResponsiveformComponent,
    Demo,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
