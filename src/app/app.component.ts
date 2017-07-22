import { ContactoPage } from './../pages/contacto/contacto';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JuradoPage } from '../pages/jurado/jurado';
import { ReglamentoPage } from '../pages/reglamento/reglamento';
import { RubroPage } from '../pages/rubro/rubro';
import { HomePage } from '../pages/home/home';
import { ReconocimientoPage } from "../pages/reconocimiento/reconocimiento";
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public push: Push,
  public alertCtrl: AlertController,  public toastCtrl:ToastController) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'El Premio', component: HomePage, icon: 'home' },
      { title: 'Reconocimientos', component: ReconocimientoPage, icon: 'medal' },
      { title: 'Rubros', component: RubroPage, icon: 'trophy' },
      { title: 'Jurado', component: JuradoPage, icon: 'person' },
      { title: 'Reglamento', component: ReglamentoPage, icon: 'book' },
      { title: 'Contacto', component: ContactoPage, icon:'information-circle' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pushSetup();


      var lastTimeBackPress = 0;
var timePeriodToExit  = 2000;

        this.platform.registerBackButtonAction(() => {
            // get current active page
            let view = this.nav.getActive();
            if (view.component.name == "HomePage") {
                //Double check to exit app
                if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                    this.platform.exitApp(); //Exit from app
                } else {
                    let toast = this.toastCtrl.create({
                        message:  'Presiona nuevamente para salir de Premios Tobar Garcia',
                        duration: 3000,
                        position: 'center'
                    });
                    toast.present();
                    lastTimeBackPress = new Date().getTime();
                }
            } else {
                // go to previous page
                if (view.component.name == 'JuradoDetailPage'){
                            this.nav.pop();
                }else {
                            this.nav.setRoot(HomePage);
                }
                
            }
        });






    });
  }

  pushSetup(){

      const options: PushOptions = {
          android: {
              senderID: '832555175894',
              sound: true,
              iconColor: '#804000'
          } 
        };

      const pushObject: PushObject = this.push.init(options);

      pushObject.on('notification').subscribe((notification: any) => {
       // if(notification.additionalData.foregroud){

          let pushAlert = this.alertCtrl.create({
            title: notification.title,
            message: notification.message,
            buttons: ['OK']
          });
          pushAlert.present();


      //  }
      });

      pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

      pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
