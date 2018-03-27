import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platforms } from '../platforms/platforms';
import { Feature } from '../features/features';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class Users {

  constructor(public navCtrl: NavController, navParams: NavParams) {
  }


  goToFeature(){
    this.navCtrl.setRoot('Feature');
  }
  
  backToPlatforms(){
    this.navCtrl.setRoot('Platforms');
  }


}







