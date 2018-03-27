import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Feature } from '../features/features';
import { Price } from '../price/price';

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html'
})
export class Support {

  constructor(public navCtrl: NavController, navParams: NavParams) {
  }


  goToPrice(){
    this.navCtrl.setRoot('Price');
  }
  
  backToFeatures(){
    this.navCtrl.setRoot('Features');
  }

  
}

