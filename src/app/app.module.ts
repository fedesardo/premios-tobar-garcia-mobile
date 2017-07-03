import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AcercaPage } from '../pages/acerca/acerca';
import { IntroPage } from '../pages/intro/intro';
import { JuradoPage } from '../pages/jurado/jurado';
import { JuradoDetailPage } from '../pages/jurado-detail/jurado-detail';
import { ReglamentoPage } from '../pages/reglamento/reglamento';
import { RubroPage } from '../pages/rubro/rubro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RubrosMockProvider } from '../providers/rubros-mock/rubros-mock';

@NgModule({
  declarations: [
    MyApp,
    AcercaPage,
    IntroPage,
    JuradoPage,
    JuradoDetailPage,
    RubroPage,
    ReglamentoPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AcercaPage,
    IntroPage,
    JuradoPage,
    JuradoDetailPage,
    RubroPage,
    ReglamentoPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RubrosMockProvider
  ]
})
export class AppModule {}
