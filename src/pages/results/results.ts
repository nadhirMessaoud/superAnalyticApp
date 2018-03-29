import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class Result {
  public receivedD;
  public results;
  constructor(public navCtrl: NavController, navParams: NavParams, public items: Items) {
    this.receivedD = navParams.data;
    console.log("RECEIVED DATA from pricing: \n" + JSON.stringify(this.receivedD, null, 4));
    this.results = [];



    console.log("ITEMS LIST : \n" + JSON.stringify(items, null, 4));

  }





  ////// SEARCHING FUNCTIONS
  getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'object') {
        objects = objects.concat(this.getObjects(obj[i], key, val));
      } else
        //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
        if (i == key && obj[i] == val || i == key && val == '') { //
          objects.push(obj);
        } else if (obj[i] == val && key == '') {
          //only add if the object is not already in the array
          if (objects.lastIndexOf(obj) == -1) {
            objects.push(obj);
          }
        }
    }
    return objects;
  }

  //return an array of values that match on a certain key
  getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'object') {
        objects = objects.concat(this.getValues(obj[i], key));
      } else if (i == key) {
        objects.push(obj[i]);
      }
    }
    return objects;
  }

  //return an array of keys that match on a certain value
  getKeys(obj, val) {
    var objects = [];
    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'object') {
        objects = objects.concat(this.getKeys(obj[i], val));
      } else if (obj[i] == val) {
        objects.push(i);
      }
    }
    return objects;
  }

  //////////////////////////
  searchTools() {

    var keyWords = this.getKeys(this.receivedD, 'true');
    console.log("SEARCHING SELECTED KEYWORDS: \n" + JSON.stringify(this.results, null, 4));

    var myTools = this.getObjects(this.items, 'keywords', 'free');
    this.results.push(myTools);
    console.log("SEARCHING RESULT: \n" + JSON.stringify(this.results, null, 4));

  }

  restart() {
    this.navCtrl.setRoot('TabsPage');
  }
  saveResult() {
    console.log("STORING DATA... JS: \n" + JSON.stringify(this.receivedD, null, 4));

    localStorage.setItem("myData", JSON.stringify(this.receivedD, null, 4));

    var result = JSON.parse(localStorage.getItem("myData"));
    console.log("LOADED DATA (Settings)...JS : \n" + JSON.stringify(result, null, 4));
    document.getElementById("resultsData").innerHTML = JSON.stringify(result, null, 4);
    this.searchTools();
    // this.navCtrl.setRoot('SavedResearchs');
  }


}

