import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Feature } from '../features/features';
//import { Price } from '../price/price';

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html'
})
export class Support {
  public receivedD;
  public support;
  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.receivedD = navParams.data;
   // console.log("RECEIVED DATA from features: \n" + JSON.stringify(this.receivedD, null, 4));
    this.support = {};
  }

  onCheckSupport(): object {
    this.receivedD.data["support"] = this.support;
    return this.receivedD;
  }
  goToPrice() {
    this.navCtrl.push('Price', this.onCheckSupport());
  }

  backToFeatures() {
    this.navCtrl.pop();
  }


}

