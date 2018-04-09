import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Platforms } from '../platforms/platforms';
//import { Feature } from '../features/features';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class Users {
  public receivedD ;
  public nbUsers : string;
  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.receivedD = navParams.data;
  }

changeRadio() : object{
  this.receivedD.data["nbUsers"] = this.nbUsers;
   return this.receivedD;
}
  goToFeature(){
    this.navCtrl.push('Feature', this.changeRadio() );
  }
  
  backToPlatforms(){
    this.navCtrl.pop();
  }


}







