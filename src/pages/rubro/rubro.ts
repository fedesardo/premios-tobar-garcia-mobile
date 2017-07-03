import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RubrosMockProvider } from "../../providers/rubros-mock/rubros-mock";

/**
 * Generated class for the RubroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rubro',
  templateUrl: 'rubro.html',
})
export class RubroPage {

  rubros: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: RubrosMockProvider) {
    this.service.findAll().then(data => this.rubros = data)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RubroPage');
  }

}
