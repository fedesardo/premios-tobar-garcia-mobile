import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JuradosMockProvider } from "../../providers/jurados-mock/jurados-mock";
import { JuradoDetailPage } from '../../pages/jurado-detail/jurado-detail';


@IonicPage()
@Component({
  selector: 'page-jurado',
  templateUrl: 'jurado.html',
})
export class JuradoPage {

  jurados: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: JuradosMockProvider) {
    this.service.findAll().then(data => this.jurados = data)
  }

  openJuradoDetail(jurado) {
    this.navCtrl.push(JuradoDetailPage, jurado);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuradoPage');
  }

}
