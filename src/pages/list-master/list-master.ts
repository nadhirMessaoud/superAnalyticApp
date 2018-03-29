import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Platforms } from '../criterias/platforms/platforms';
import { Criteria } from '../../models/criteria';
import { Criterias } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  public cat;

  game: boolean;
  news: boolean;
  media: boolean;
  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
    console.log("DATA before constructor: \n" + JSON.stringify(this.cat, null, 4));

    //  console.log("DATA from constructor: \n" + JSON.stringify(this.cat, null, 4));
    this.cat = {}
  }
  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  changedCat(): object {
    let send = {
      data: {
        cat: this.cat
      }
    }
    console.log("SEND DATA to Platform: \n" + JSON.stringify(send, null, 4));

    return send;
  }
  goToPlatforms() {

    //let cr = new Criteria(crFields);
    // this.criterias.add(cr);
    // console.log(this.changedCat());
    //console.log("categories: \n" + this.changedCat());
    let getData = this.changedCat();

    console.log("SENDING DATA to Platform: \n" + JSON.stringify(getData, null, 4));
    this.navCtrl.push('Platforms', getData);
  }

  /** 
    returnToCategories() {
      //this.navCtrl.setRoot('WelcomePage');
      this.navCtrl.pop();
    }  
  */

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
