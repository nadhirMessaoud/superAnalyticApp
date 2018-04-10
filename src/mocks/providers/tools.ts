import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Tools {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Google Firebase",
    "profilePic": "assets/img/analyticTools/firebase.png",
    "about": "Firebase is Google's analytic tool for mobile apps.",
  };


  constructor() {
    let items = [
      {
        "name": "Google Firebase",
        "cat": ["media", "news", "game"],
        "profilePic": "assets/img/analyticTools/firebase.png",
        "detailPic": "assets/img/analyticTools/firebase1.png",
        "about": "Firebase is Google's analytic tool for mobile apps.",
        "platforms": ["android", "ios", "unity", "web", "c++"],
        "users": 400,
        "price": ["free", "premium", "ondemand"],
        "features": ["A/B Testing",
          "Analyses d’attribution",
          "Analyses de cohortes",
          "Analyses des funnels",
          "événement In-app",
          "Notifications Push",
          "Traçage de rétention",
          "Traçage des revenues",
          "Enlever les traçages"
        ],
        "support": ["24/7", "Online", "Documentation", "Personnal courses", "Webinars"],
        "keywords": ["firebase",'google', "android", "ios", "unity", "web", "cpp", "free", "premium", "ondemand",
      'abTest', 'attribution', 'cohort', 'funnel', 'live24_7', 'media','inapp', 'push', 'retention', 'revenu','trace'
      ,"nb100","nb1k","nb5k"]
      },
      {
        "name": "Countly",
        "profilePic": "assets/img/analyticTools/countly.png",
        "detailPic": "assets/img/analyticTools/countly1.png",
        "about": "Clients might be banks, financial institutions, telecom operators, gaming companies, ad networks, service providers, hospitals, health companies",
        "platforms": ["ios", "android"],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["Countly","ios", "android", 'live24_7', 'trial'],
      },
      {
        "name": "AppSee",
        "profilePic": "assets/img/analyticTools/appsee.jpg",
        "detailPic": "assets/img/analyticTools/appsee.png",
        "about": "AppSee is used by mobile app product owners, developers, and marketers who want to deliver the best possible user experience within their mobile apps and increase retention, conversions and in-app monetization",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["Appsee", "android", "ios", "free", "premium", "ondemand",
          'cohort', 'funnel', 'inapp', 'retent',"online","business_hours","doc"],
      },
      {
        "name": "Amazon Pinpoint",
        "profilePic": "assets/img/analyticTools/pinpoint1.png",
        "detailPic": "assets/img/analyticTools/pinpoint.jpg",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["media","news","game","ios","android","unity","wp","abTest",
        "conversion","campain","channel","cohort","funnel","inapp","push","retent",
        "inPerson","liveOnline","webinars","doc","online","business_hours",
        "live24_7","premium","trial","free"],
      },
      {
        "name": "CleverTap",
        "profilePic": "assets/img/analyticTools/cleverTap.jpg",
        "detailPic": "assets/img/analyticTools/cleverTap1.png",
        "about": "CleverTap serve businesses who are looking to create exceptional customer experiences by leveraging real-time analytics and personalizing engagement strategies at scale.",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["media","news","game","ios","android","unity","wp","cpp","abTest",
        "channel","cohort","funnel","crash","predective","inapp","push","retent",
        "revenue","inPerson","liveOnline","webinars","doc","online","business_hours",
        "live24_7","premium","trial","free"],
      },
      {
        "name": "Fabric",
        "profilePic": "assets/img/analyticTools/fabric.jpg",
        "detailPic": "assets/img/analyticTools/Fabric1.png",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["android", "ios"],
      },
      {
        "name": "Flurry Analytics",
        "profilePic": "assets/img/analyticTools/flurry.jpg",
        "detailPic": "assets/img/analyticTools/flurry1.png",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["android", "ios"],
      },
      {
        "name": "Mixpanel",
        "profilePic": "assets/img/analyticTools/mixpanel.png",
        "detailPic": "assets/img/analyticTools/mixpanel1.png",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["android", "ios"],
      },
      {
        "name": "Amplitude",
        "profilePic": "assets/img/analyticTools/amplitude.png",
        "detailPic": "assets/img/analyticTools/Amplitude1.png",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["android", "ios"],
      },
      {
        "name": "TUNE",
        "profilePic": "assets/img/analyticTools/tune.png",
        "detailPic": "assets/img/analyticTools/tune1.png",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["android", "ios"],
      },
      {
        "name": "App Annie",
        "profilePic": "assets/img/analyticTools/app-annie.png",
        "detailPic": "assets/img/analyticTools/app-annie1.png",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["android", "ios"],
      },
      {
        "name": "Follow Analytics",
        "profilePic": "assets/img/analyticTools/follow.jpg",
        "detailPic": "assets/img/analyticTools/Follow1.png",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["android", "ios"],
      },
      {
        "name": "Branch",
        "profilePic": "assets/img/analyticTools/branch.jpg",
        "detailPic": "assets/img/analyticTools/branch1.jpg",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["android", "ios"],
      },
      {
        "name": "Localytics",
        "profilePic": "assets/img/analyticTools/localytics.png",
        "detailPic": "assets/img/analyticTools/localytics1.png",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["Localytics","ios", "android", 'media'],
      }
     /* ,
      {
        "name": "Sorry, no tool(s) found in DB",
        "profilePic": "",
        "detailPic": "assets/img/analyticTools/noTool",
        "about": "",
        "platforms": ["", ""],
        "users": 1000,
        "price": ["", ""],
        "keywords": ["media","news","game","ios","android","unity","wp","cpp","abTest",
        "channel","cohort","funnel","crash","predective","inapp","push","retent",
        "revenue","inPerson","liveOnline","webinars","doc","online","business_hours",
        "live24_7","premium","trial","free"],
      }*/

      
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  areAllCriteriasAreThere (superset, subset) {
    if (0 === subset.length) {
      return false;
    }
    return subset.every(function (value) {
      return (superset.indexOf(value) >= 0);
    });
  }

  searchQuery(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {

      for (let key in params) {
        console.log("myKey: "+"\n"+key);
        console.log("MyParamKey: "+"\n"+params[key]);
        let field = item[key];
        console.log("myField: "+"\n"+"\n"+"\n"+field);
        let criteriasAreThere = this.areAllCriteriasAreThere(field,params[key]);
        
          if (Array.isArray(field) && criteriasAreThere){
       
            console.log("field is an array....");
            console.log("searching field: "+field);
            console.log("Returning Item: \n" + JSON.stringify(item, null, 4));

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
