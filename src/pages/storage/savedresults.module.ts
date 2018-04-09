import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SavedResultsPage } from './savedresults';

@NgModule({
  declarations: [
    SavedResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedResultsPage),
    TranslateModule.forChild()
  ],
  exports: [
    SavedResultsPage
  ]
})
export class SavedResultsPageModule { }
