import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JuradosMockProvider } from "../../providers/jurados-mock/jurados-mock";

@Component({
  selector: 'page-jurado-detail',
  templateUrl: 'jurado-detail.html',
})
export class JuradoDetailPage {

  jurado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service:JuradosMockProvider) {
         this.jurado = this.navParams.data;
         service.findById(this.jurado.id).then(
         jurado => this.jurado = jurado)
  }


}
