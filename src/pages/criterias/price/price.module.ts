import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { Price } from './price';

@NgModule({
  declarations: [
    Price,
  ],
  imports: [
    IonicPageModule.forChild(Price),
    TranslateModule.forChild()
  ],
  exports: [
    Price
  ]
})
export class PriceModule { }
