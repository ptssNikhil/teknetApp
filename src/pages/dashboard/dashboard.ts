import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TekblogPage} from '../../pages/tekblog/tekblog';
import {TektubePage} from '../../pages/tektube/tektube';
import {BaysideAssistantPage} from '../../pages/bayside-assistant/bayside-assistant';
import {TeklinePage} from '../../pages/tekline/tekline';
import {DashboardContentPage} from '../../pages/dashboard-content/dashboard-content';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
tab1:any;
tab2:any;
tab3:any;
tab4:any;
tab5:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = DashboardContentPage;
    this.tab2=TeklinePage;
    this.tab3=TekblogPage;
    this.tab4 = TektubePage;
    this.tab5 = BaysideAssistantPage;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  logTabView(name:string){
    console.log('clicked on ' +name);
  }

}
