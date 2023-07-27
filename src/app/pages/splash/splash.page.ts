import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from 'src/app/login/login.page'; 

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage {

  constructor(
    public navCtrl: NavController,
    //public viewCtrl: ViewController, 
    public navParams: NavParams, 
    public splashScreen: SplashScreen
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

  ionViewDidEnter() {
 this.splashScreen.hide();
    setTimeout(() => {

    
        //this.navCtrl.push(LoginPage);

            //this.viewCtrl.dismiss();
    }, 4000);
 
  }

}
