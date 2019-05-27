import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertController } from "ionic-angular";
import { Observable } from "rxjs/Observable";
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
  public appData: any;
  constructor(public http: HttpClient, public alertCtrl: AlertController) {
    console.log(" DataServiceProvider Provider Initialize");
  }

  public getDashbaordData() {
    console.log("dashboardcalled");
    // this.httpGet('http://dummy.restapiexample.com/api/v1/employees');
    // this.httpPost(
    //   "http://dummy.restapiexample.com/api/v1/create",
    //   '{"name":"test","salary":"123","age":"23"}'
    // );
  }

  public httpGet(apiUrl: string) {
    this.http.get(apiUrl).subscribe(response => {
      console.log(response);
      return response;
    });
  }

  public httpPost(apiUrl: string, data: any) {
    this.http.post(apiUrl, data).subscribe(response => {
      console.log(response);
      return response;
    });
  }

  public storeData(key: string, data: any) {
    this.appData[key] = data;
  }

  public getData(key: string) {
    return this.appData[key];
  }

  public confirmationAlert(
    title: string,
    message: string,
    buttonOne: string,
    buttonTwo: string
  ) {
    const confirm = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: buttonOne,
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: buttonTwo,
          handler: () => {
            console.log("Agree clicked");
          }
        }
      ]
    });
    confirm.present();
  }

  public alertCustom(
    title: string,
    Subtitle: string,
    message: string,
    buttonTittle: string,
    cssClass:string
  ) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: Subtitle,
      message: message,
      buttons: [buttonTittle],
      cssClass: cssClass
    });

    alert.present();
  }
}
