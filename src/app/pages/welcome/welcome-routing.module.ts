import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: 'stats',component: StatsComponent},
  { path: '', component: WelcomeComponent} ,
   { path: ':topic', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
