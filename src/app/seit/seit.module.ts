import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeitRoutingModule } from './seit-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SeitRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class SeitModule { }
