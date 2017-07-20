import { ContactoPage } from './../pages/contacto/contacto';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JuradoPage } from '../pages/jurado/jurado';
import { JuradoDetailPage } from '../pages/jurado-detail/jurado-detail';
import { ReglamentoPage } from '../pages/reglamento/reglamento';
import { RubroPage } from '../pages/rubro/rubro';
import { ReconocimientoPage } from "../pages/reconocimiento/reconocimiento";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RubrosMockProvider } from '../providers/rubros-mock/rubros-mock';
import { JuradosMockProvider } from '../providers/jurados-mock/jurados-mock';
import { Push } from '@ionic-native/push';

@NgModule({
  declarations: [
    MyApp,
    JuradoDetailPage,
    JuradoPage,
    RubroPage,
    ReglamentoPage,
    HomePage,
    ReconocimientoPage,
    ContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JuradoPage,
    JuradoDetailPage,
    RubroPage,
    ReglamentoPage,
    HomePage,
    ReconocimientoPage,
    ContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RubrosMockProvider,
    JuradosMockProvider,
    Push
  ]
})
export class AppModule {}
