import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { Support } from './support';

@NgModule({
  declarations: [
    Support,
  ],
  imports: [
    IonicPageModule.forChild(Support),
    TranslateModule.forChild()
  ],
  exports: [
    Support
  ]
})
export class SupportModule { }
