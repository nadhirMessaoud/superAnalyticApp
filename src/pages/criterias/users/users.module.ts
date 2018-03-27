import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { Users } from './users';

@NgModule({
  declarations: [
    Users,
  ],
  imports: [
    IonicPageModule.forChild(Users),
    TranslateModule.forChild()
  ],
  exports: [
    Users
  ]
})
export class UsersModule { }
