import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TekblogPage } from './tekblog';

@NgModule({
  declarations: [
    TekblogPage,
  ],
  imports: [
    IonicPageModule.forChild(TekblogPage),
  ],
})
export class TekblogPageModule {}
