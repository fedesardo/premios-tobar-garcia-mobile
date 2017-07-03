import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RubroPage } from './rubro';

@NgModule({
  declarations: [
    RubroPage,
  ],
  imports: [
    IonicPageModule.forChild(RubroPage),
  ],
  exports: [
    RubroPage
  ]
})
export class RubroPageModule {}
