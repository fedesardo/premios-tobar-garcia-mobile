import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AcercaPage } from '../pages/acerca/acerca';
import { JuradoPage } from '../pages/jurado/jurado';
import { ReglamentoPage } from '../pages/reglamento/reglamento';
import { RubroPage } from '../pages/rubro/rubro';
import { HomePage } from '../pages/home/home';
import { IntroPage } from "../pages/intro/intro";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = IntroPage;

  pages: Array<{title: string, component: any, icon?: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Rubros', component: RubroPage, icon: 'trophy' },
      { title: 'Jurado', component: JuradoPage, icon: 'person' },
      { title: 'Reglamento', component: ReglamentoPage, icon: 'book' },
      { title: 'Acerca de', component: AcercaPage, icon:'information-circle' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
