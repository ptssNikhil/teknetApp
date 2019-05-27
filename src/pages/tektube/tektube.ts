import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DataServiceProvider } from "../../providers/data-service/data-service";

/**
 * Generated class for the TektubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tektube",
  templateUrl: "tektube.html"
})
export class TektubePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataServiceProvider
  ) {}

  ionViewDidLoad() {
    
  }

  public onClick(){
    console.log("tabbed on icon");
    this.dataProvider.alertCustom('Tittle','Subtittle','Template Messsage','Ok','profalert');
  }
}
