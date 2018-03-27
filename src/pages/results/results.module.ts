import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { Result } from './results';

@NgModule({
  declarations: [
    Result,
  ],
  imports: [
    IonicPageModule.forChild(Result),
    TranslateModule.forChild()
  ],
  exports: [
    Result
  ]
})
export class ResultModule { }
