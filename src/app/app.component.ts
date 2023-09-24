import { Component, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  firestore: Firestore = inject(Firestore)
  items$: Observable<any[]>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController
  ) {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection);
    this.initializeApp();
  }

  ngOnInit() {
    // Simula una carga de inicio
    setTimeout(() => {
      // Oculta el splash screen
      document.querySelector('.custom-splash');
      //document.querySelector('.custom-splash').style.display = 'none';
  
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
