import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardContentPage } from './dashboard-content';

@NgModule({
  declarations: [
    DashboardContentPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardContentPage),
  ],
})
export class DashboardContentPageModule {}
