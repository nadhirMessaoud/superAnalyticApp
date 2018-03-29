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
  public receivedD ;
  public nbUsers : string;
  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.receivedD = navParams.data;
    console.log("RECEIVED DATA from paltform: \n" + JSON.stringify(this.receivedD, null, 4));
   

    //console.log("RECEIVED DATA ios: \n" +this.data.plat.ios);
   // console.log("RECEIVED DATA game: \n" +this.data.cat.game);

  }

changeRadio() : object{

  this.receivedD.data["nbUsers"] = this.nbUsers;
 
  console.log("SEND DATA to features: \n" + JSON.stringify(this.receivedD, null, 4));

  return this.receivedD;
}
  goToFeature(){
    
    this.navCtrl.push('Feature', this.changeRadio() );
  }
  
  backToPlatforms(){
    this.navCtrl.pop();
  }


}







