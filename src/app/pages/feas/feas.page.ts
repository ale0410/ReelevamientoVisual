import { Component, Inject } from '@angular/core';
import { NavController, NavParams, AlertController } from '@ionic/angular';

import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { initializeApp } from '@angular/fire/app';
//import { FIREBASE_CONFIG } from '../../app/firebase.config';
//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import { ImagenesProvider } from 'src/providers/imagenes/imagenes';
import { Imagen } from 'src/app/clases/Imagen';
import { Usuario } from 'src/app/clases/Usuario';
import { ListaFeasPage } from '../lista-feas/lista-feas.page';
import { MisFotosPage } from '../mis-fotos/mis-fotos.page';


@Component({
  selector: 'app-feas',
  templateUrl: './feas.page.html',
  styleUrls: ['./feas.page.scss'],
})
export class FeasPage {

  miFoto:any;
  clasificacionFoto: number=0;
  fotos:any;
  resultFoto:any;
  captureDataUrl:Array<any>;
  usuario:Usuario;
  hayFotos!: boolean;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public router: Router,
    private camera: Camera,
    private imgProvider: ImagenesProvider,
    public alertCtrl: AlertController
   ) {
    this.usuario= JSON.parse(sessionStorage.getItem("usuario")!); //initializeApp(FIREBASE_CONFIG);
    this.TraerFoto();
    this.captureDataUrl= new Array<string>();
    
    //console.log(this.fotos);

  }

 async SacarFoto(){

    const options: CameraOptions = {
      quality: 50,
      //destinationType: this.camera.DestinationType.FILE_URI,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
     // saveToPhotoAlbum: true
    }
     
      await this.camera.getPicture(options).then((imageData)=>{
      this.captureDataUrl.push('data:image/jpeg;base64,'+ imageData);
      this.hayFotos=true;
      }, (error)=>{
        
        this.alertCtrl.create({
          //title: 'Error!',
          //subTitle: error,
          buttons: ['Ok']
        });//.present();

      });
    }

   async GuardarFotos()
    {
      let ImagenAGuardar= new Imagen();
      let hora= new Date();

     await this.captureDataUrl.forEach(async foto=>{
        let filename = 'feas/'+ Date.now(); //hora.getFullYear()+ hora.getMonth() + hora.getDate() + hora.getHours() + hora.getMinutes() + hora.getSeconds();
        
        let  fotos = await firebase.storage().ref(filename).putString(foto,'data_url');

        await firebase.storage().ref().child(filename).getDownloadURL().then(async (url)=>{
          ImagenAGuardar.path=url;
          ImagenAGuardar.nombre=filename;
          ImagenAGuardar.usuario=this.usuario;
          await this.imgProvider.GuardarData(ImagenAGuardar, "feas");
      
         console.log(url);
         this.captureDataUrl.splice(0);
        }).catch((data)=>{
          console.log(data);
        });

      })

           
     //let nombreBd='feas/'+ hora.getFullYear()+ hora.getMonth() + hora.getDate() + hora.getHours() + hora.getMinutes() + hora.getSeconds();
    // const fotos =await storage().ref(nombreBd);
    // const imagen= 'data:image/jpeg;base64,'+result;
    
     //await fotos.putString(imagen,'data_url');
/*
    await firebase.storage().ref().child(nombreBd).getDownloadURL().then((url)=>{
      ImagenAGuardar.path=url;
  
     console.log(url);
    }).catch((data)=>{
      console.log(data);
    });
     
     ImagenAGuardar.nombre=nombreBd;
     ImagenAGuardar.usuario=this.usuario;
     this.imgProvider.GuardarData(ImagenAGuardar);

    */
    }
     

  

  TraerFoto()
  {
    this.imgProvider.TraerFotosFeas().subscribe(arr => {
   
      this.fotos = arr.map(function(mesa, index){
        return mesa;
      });
    });
    console.log(this.fotos);
  }




  IrAListaFeas()
  {
    this.router.navigateByUrl("lista-feas");
  }

  MisFotos()
  {
    this.router.navigateByUrl("mis-fotos");
  }

}
