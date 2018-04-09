import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  

  constructor(public navCtrl: NavController,
    public savedresults: SavedResults,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService) {

  }



  loadData(){
    // DISPLAY ALL SAVED DATA ... with prefix 'savedResearch' ....
    var result = JSON.parse(localStorage.getItem("myData"));
    
    //console.log("LOADED DATA JS(settings )... : \n" + JSON.stringify(result, null, 4));

    document.getElementById("result").innerHTML = JSON.stringify(result, null, 4);

  }

}
