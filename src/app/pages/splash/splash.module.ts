import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashPageRoutingModule } from './splash-routing.module';

import { SplashPage } from './splash.page';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashPageRoutingModule
  ],
  declarations: [SplashPage],
  providers: [SplashScreen]
})
export class SplashPageModule {}
