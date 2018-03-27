import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Support } from '../support/support';
import { Result } from '../../results/results';

@IonicPage()
@Component({
  selector: 'page-price',
  templateUrl: 'price.html'
})
export class Price {

  constructor(public navCtrl: NavController, navParams: NavParams) {
  }


  goToResult(){
    this.navCtrl.setRoot('Result');
  }
  
  backToSupport(){
    this.navCtrl.setRoot('Support');
  }

     
}

