import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReconocimientoPage } from './reconocimiento';

@NgModule({
  declarations: [
    ReconocimientoPage,
  ],
  imports: [
    IonicPageModule.forChild(ReconocimientoPage),
  ],
  exports: [
    ReconocimientoPage
  ]
})
export class ReconocimientoPageModule {}
