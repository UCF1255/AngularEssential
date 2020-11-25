import { SubjectsComponent } from './subjects/subjects.component';
import { PromiseComponent } from './promise/promise.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BehaviorsubjectComponent } from './behaviorsubject/behaviorsubject.component';
import { ObservablesComponent } from './observables/observables.component';
import { ReplaysubjectComponent } from './replaysubject/replaysubject.component';
import { ResponsiveformComponent } from './responsiveform/responsiveform.component';

const routes: Routes = [
  { path: 'home',  component:  HomeComponent },
  { path: 'promise', component: PromiseComponent},
  { path: 'observables',  component:  ObservablesComponent },
  { path: 'subject',  component:  SubjectsComponent },
  { path: 'behaviorSubject',  component:  BehaviorsubjectComponent },
  { path: 'replaySubject', component: ReplaysubjectComponent },
  { path: 'app-responsiveform', component: ResponsiveformComponent },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
