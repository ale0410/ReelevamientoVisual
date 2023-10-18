import { Component, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController
  ) {
  
    this.initializeApp();
  }

  ngOnInit() {
    // Simula una carga de inicio
    setTimeout(() => {
  
      // Redirige al usuario a la página principal
      this.navCtrl.navigateRoot('/login');
    }, 3000); // 3000 milisegundos (3 segundos) como ejemplo
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
