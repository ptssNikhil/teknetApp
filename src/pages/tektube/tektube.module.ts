import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TektubePage } from './tektube';

@NgModule({
  declarations: [
    TektubePage,
  ],
  imports: [
    IonicPageModule.forChild(TektubePage),
  ],
})
export class TektubePageModule {}
