import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePickerDirective } from 'ion-datepicker';
import {ViewChild} from '@angular/core';

/**
 * Generated class for the AlertDeatailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-alert-deatail',
  templateUrl: 'alert-deatail.html',
})

export class AlertDeatailPage {
  @ViewChild(DatePickerDirective) private datepickerDirective:DatePickerDirective;
  public localDate:Date = new Date();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertDeatailPage');
  }

  

    public closeDatepicker(){
        this.datepickerDirective.modal.dismiss();
    }
}
