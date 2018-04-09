import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Users } from '../users/users';
//import { Support } from '../support/support';

@IonicPage()
@Component({
  selector: 'page-features',
  templateUrl: 'features.html'
})
export class Feature {
  public receivedD;
  public feat;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.receivedD = navParams.data;
    this.feat = {};
  }

  onCheckFeature(): object{
    this.receivedD.data["features"] = this.feat;
    return this.receivedD;
  }

  goToSupport(){
    this.navCtrl.push('Support', this.onCheckFeature());
  }
  
  backToUsers(){
    this.navCtrl.pop();
  }

  
}

