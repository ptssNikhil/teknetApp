import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BaysideAssistantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bayside-assistant',
  templateUrl: 'bayside-assistant.html',
})
export class BaysideAssistantPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaysideAssistantPage');
  }
  ionSelected() {
    console.log("BaysideAssistant Page has been selected");
    // do your stuff here
  }
}
