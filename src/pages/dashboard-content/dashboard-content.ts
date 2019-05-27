import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DataServiceProvider } from "../../providers/data-service/data-service";
/**
 * Generated class for the DashboardContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-dashboard-content",
  templateUrl: "dashboard-content.html"
})
export class DashboardContentPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad DashboardContentPage");
  }
  ionViewWillEnter() {
    this.dataProvider.getDashbaordData();
  }
}
