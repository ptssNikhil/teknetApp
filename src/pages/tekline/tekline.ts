import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertDeatailPage } from '../alert-deatail/alert-deatail';

/**
 * Generated class for the TeklinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tekline',
  templateUrl: 'tekline.html',
})
export class TeklinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public tekLineTab:string;
  ngOnInit(){
   
  }
  ionViewWillEnter(){
    this.tekLineTab='myTar';
    
  }
  public onListClick(item:string){
    console.log("you clicked on " + item);
    this.navCtrl.push(AlertDeatailPage);
    // this.navCtrl.setRoot(TekBlogChatPage);
    // this.dataProvider.alertCustom('Tittle','Subtittle','Template Messsage','Ok','profalert');
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TeklinePage');
  // }

}
