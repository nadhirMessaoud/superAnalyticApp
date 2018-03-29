import { Injectable } from '@angular/core';

import { Criteria } from '../../models/criteria';

@Injectable()
export class Criterias {
  criterias: Criteria[] = [];

  defaultItem: any = {};


  constructor() {

    for (let cr of this.criterias) {
      this.criterias.push(new Criteria(cr));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.criterias;
    }

    return this.criterias.filter((item) => {
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

  add(cr: Criteria) {
    this.criterias.push(cr);
  }

  delete(cr: Criteria) {
    this.criterias.splice(this.criterias.indexOf(cr), 1);
  }
}
