import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaysideAssistantPage } from './bayside-assistant';

@NgModule({
  declarations: [
    BaysideAssistantPage,
  ],
  imports: [
    IonicPageModule.forChild(BaysideAssistantPage),
  ],
})
export class BaysideAssistantPageModule {}
