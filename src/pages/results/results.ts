import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { TabsPage } from '../tabs/tabs';
//import { Item } from '../../models/item';
import { Tools } from '../../providers/providers';
import { Item } from '../../models/item';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class Result {
  public keyData;
  public receivedD;
  results : any= [];
  constructor(public navCtrl: NavController, navParams: NavParams, public items: Tools, private alertCtrl: AlertController) {
    this.receivedD = navParams.data;
    console.log("RECEIVED DATA from pricing: \n" + JSON.stringify(this.receivedD, null, 4));
    



    //console.log("ITEMS LIST : \n" + JSON.stringify(items, null, 4));
    this.searchTools();

  }

  savePOP() {
    let alert = this.alertCtrl.create({
      title: 'Save',
      subTitle: 'Save your search results to retreive it easly later !',
      inputs: [
        {
          name: 'searchName',
          placeholder: 'Search name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if (this.receivedD) {
              this.saveResult(data.searchName, this.receivedD);
            } else {
              return false;
            }
          }
        }
      ]
    });
    alert.present();
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

  getObjectsVal(obj, val) {
    var objects = [];
    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'object') {
        objects = objects.concat(this.getObjectsVal(obj[i], val));
      } else if (Array.isArray(obj[i])) {
        for(var j = 0; i< obj[i].length ; j++)
        if(obj[i][j] == val) {objects.push(obj)}
        // TODO Manage this arrays !
      }else
        //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
        if ( obj[i] == val ||  val == '') { //
          objects.push(obj);
        } else if (obj[i] == val) {
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
      } else if (Array.isArray(obj[i])) {
        for(var j = 0; i< obj[i].length ; j++)
        if(obj[i][j] == val) {objects.push(i)}
        // TODO Manage this arrays !
      } else if (obj[i] == val) {
        objects.push(i);
      }
    }
    return objects;
  }


  ///////// intersecting 


  //////////////////////////
  searchTools() {

    var keyWords = this.getKeys(this.receivedD, true);
    console.log("SEARCHING for SELECTED KEYWORDS: \n" + JSON.stringify(keyWords, null, 4));
    
    console.log("SEARCHING INTO: \n" + JSON.stringify(this.items, null, 4));
   
    var analTools= [];
    var keyTools = [];

  //  for (var i = 0; i < keyWords.length; i++) {
 //}

      console.log("searching actual keywords:" +keyWords); 
      keyTools = keyTools.concat(this.items.query({
        keywords : keyWords
      }));
      
      console.log("TOOOOOOLS: \n" + JSON.stringify(this.getValues(keyTools, 'name' ), null, 4)+ '\n...............');


      //console.log("Tool found: \n" + JSON.stringify(atool, null, 4));
      //analTools.concat(atool );
      //console.log("analTools: \n" + JSON.stringify(analTools, null, 4));
      //var myTool = this.getObjectsVal(this.items,keyWords[i]);
      //.concat();


   
    
    this.results = keyTools
    console.log("SEARCHING RESULTS: " +"\n" + JSON.stringify(this.results, null, 4));

    /*.filter( tool =>
      tool.na
    );
*/


  }

 

  saveResult(name, data) {
    localStorage.setItem(name, JSON.stringify(data, null, 4));
    //console.log("KEYWORDS HERE: \n" + JSON.stringify(this.getKeys(data, true), null, 4));
    var result = JSON.parse(localStorage.getItem("my"));
    document.getElementById("resultsData").innerHTML = JSON.stringify(result, null, 4);
    // this.navCtrl.setRoot('SavedResearchs');
  }

  restart() {
    this.navCtrl.setRoot('TabsPage');
  }

  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}

