import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { environment } from '../environments/environment';
//import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { UsuariosProvider } from 'src/providers/usuarios/usuarios';
import { ImagenesProvider } from 'src/providers/imagenes/imagenes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { FeasPage } from './pages/feas/feas.page';
import { LindasPage } from './pages/lindas/lindas.page';
import { Camera } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { CamaraProvider } from 'src/providers/camara/camara';






@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    NgChartsModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())],
  providers: [StatusBar, 
    SplashScreen,
    CamaraProvider,
    ImagenesProvider,
    UsuariosProvider, 
    AuthService, 
    AngularFirestoreModule, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
