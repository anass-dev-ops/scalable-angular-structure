import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { BolgsComponent } from './components/bolgs/bolgs.component';
import { VideosComponent } from './components/videos/videos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [PrivateComponent, BolgsComponent, VideosComponent, DashboardComponent],
  imports: [CommonModule, PrivateRoutingModule, SharedModule],
})
export class PrivateModule {}
