import { VideosComponent } from './components/videos/videos.component';
import { BolgsComponent } from './components/bolgs/bolgs.component';
import { PrivateComponent } from './private.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'blogs', component: BolgsComponent },
  { path: 'videos', component: VideosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
