import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class Result {

  constructor(public navCtrl: NavController, navParams: NavParams) {
  }


  restart(){
    this.navCtrl.setRoot('TabsPage');
  }
  
  saveResult(){
   // this.navCtrl.setRoot('SavedResearchs');
  }

     
}

