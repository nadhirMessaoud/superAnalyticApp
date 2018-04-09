import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Support } from '../support/support';
//import { Result } from '../../results/results';

@IonicPage()
@Component({
  selector: 'page-price',
  templateUrl: 'price.html'
})
export class Price {
  public receivedD;
  public price;
  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.receivedD = navParams.data;
    //console.log("RECEIVED DATA from support: \n" + JSON.stringify(this.receivedD, null, 4));
    this.price = {};
  }

  onCheckPricing(){
    this.receivedD.data["price"] = this.price;
    return this.receivedD;
  }
  goToResult(){
    this.navCtrl.setRoot('Result', this.onCheckPricing() );
  }
  
  backToSupport(){
    this.navCtrl.pop();
  }

     
}

