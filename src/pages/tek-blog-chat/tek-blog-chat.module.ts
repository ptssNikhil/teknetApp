import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TekBlogChatPage } from './tek-blog-chat';

@NgModule({
  declarations: [
    TekBlogChatPage,
  ],
  imports: [
    IonicPageModule.forChild(TekBlogChatPage),
  ],
})
export class TekBlogChatPageModule {}
