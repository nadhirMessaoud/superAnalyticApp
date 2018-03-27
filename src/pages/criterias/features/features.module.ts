import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { Feature } from './features';

@NgModule({
  declarations: [
    Feature,
  ],
  imports: [
    IonicPageModule.forChild(Feature),
    TranslateModule.forChild()
  ],
  exports: [
    Feature
  ]
})
export class FeaturesModule { }
