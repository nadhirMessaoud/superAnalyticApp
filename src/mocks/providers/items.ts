import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Google Firebase",
    "profilePic": "assets/img/speakers/firebase.png",
    "about": "Firebase is Google's analytic tool for mobile apps.",
  };


  constructor() {
    let items = [
      {
        "name": "Google Firebase",
        "profilePic": "assets/img/speakers/firebase.png",
        "detailPic": "assets/img/speakers/firebase1.png",
        "about": "Firebase is Google's analytic tool for mobile apps.",
        "platforms": ["android", "ios", "unity", "web", "c++"],
        "users": 400,
        "price": ["free", "premium", "on"],
        "keywords": ["free", "premium", "on"]
      },
      {
        "name": "",
        "profilePic": "",
        "detailPic": "assets/img/speakers/",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["", ""],
      },
      {
        "name": "",
        "profilePic": "",
        "detailPic": "assets/img/speakers/",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["", ""],
      },
      {
        "name": "",
        "profilePic": "",
        "detailPic": "assets/img/speakers/",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["", ""],
      },
      {
        "name": "",
        "profilePic": "",
        "detailPic": "assets/img/speakers/",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["", ""],
      },
      {
        "name": "",
        "profilePic": "",
        "detailPic": "assets/img/speakers/",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["", ""],
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        console.log(key);
        console.log(params[key]);
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          console.log(field);
          console.log(key);
          console.log(params[key]);

          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
