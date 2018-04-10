import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tools } from '../../providers/providers';
import { Item } from '../../models/item';
import { SavedResults } from '../../providers/providers';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-savedresults',
  templateUrl: 'savedresults.html'
})
export class SavedResultsPage {
  
  resultsArray: any = [];
  constructor(public navCtrl: NavController,
    public savedresults: SavedResults,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService) {
      this.loadData();

  }



  loadData(){
    // DISPLAY ALL SAVED DATA ... with prefix 'savedResearch' ....
    this.resultsArray = JSON.parse(localStorage.getItem("myResultsArray"));
    
    console.log("LOADED DATA JS(savedResults )... : \n" + JSON.stringify(this.resultsArray, null, 4));

    //document.getElementById("results").innerHTML = JSON.stringify(this.results, null, 4);

  }

}
