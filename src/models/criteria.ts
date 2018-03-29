export class Criteria {

    constructor(fields: any) {
      for (const f in fields) {
        this[f] = fields[f];
      }
    }
  
  }
  
  export interface Criteria {
    [prop: string]: any;
  }
  