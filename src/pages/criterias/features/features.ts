import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Users } from '../users/users';
import { Support } from '../support/support';

@IonicPage()
@Component({
  selector: 'page-features',
  templateUrl: 'features.html'
})
export class Feature {

  constructor(public navCtrl: NavController, navParams: NavParams) {
  }


  goToSupport(){
    this.navCtrl.setRoot('Support');
  }
  
  backToUsers(){
    this.navCtrl.setRoot('Users');
  }

  
}

