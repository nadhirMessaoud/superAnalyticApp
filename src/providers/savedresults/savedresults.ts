import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/**
 * A simple SavedResults class for displaying key/value pairs with persistence.
 */
@Injectable()
export class SavedResults {

  constructor(public storage: Storage, defaults: any) {
  }


}
