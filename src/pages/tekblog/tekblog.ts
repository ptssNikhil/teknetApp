import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TekBlogChatPage} from '../tek-blog-chat/tek-blog-chat';
/**
 * Generated class for the TekblogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tekblog',
  templateUrl: 'tekblog.html',
})
export class TekblogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TekblogPage');
  }

  public onListClick(item:string){
    console.log("you clicked on " + item);
    this.navCtrl.push(TekBlogChatPage);
    // this.navCtrl.setRoot(TekBlogChatPage);
    // this.dataProvider.alertCustom('Tittle','Subtittle','Template Messsage','Ok','profalert');
  }

}
