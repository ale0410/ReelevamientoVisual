import { Component, Inject } from '@angular/core';
import { NavController, NavParams, AlertController } from '@ionic/angular';

import { CameraOptions, Camera } from '@ionic-native/camera';
import { Router } from '@angular/router';
import { initializeApp } from '@angular/fire/app';
//import { FIREBASE_CONFIG } from '../../app/firebase.config';
import firebase from 'firebase/compat/app';
import { Imagen } from 'src/app/clases/Imagen';
import { ImagenesProvider } from 'src/providers/imagenes/imagenes';
import { Usuario } from 'src/app/clases/Usuario';
//import { ListaLindasPage } from '../lista-lindas/lista-lindas.page';
import { Voto } from 'src/app/clases/Voto';
//import { MisFotosPage } from '../mis-fotos/mis-fotos.page';

@Component({
  selector: 'app-lindas',
  templateUrl: './lindas.page.html',
  styleUrls: ['./lindas.page.scss'],
})
export class LindasPage {

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


  constructor(public navCtrl: NavController, 
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
     
      await this.camera.getPicture(options).then((imageData:any)=>{
      this.captureDataUrl.push('data:image/jpeg;base64,'+ imageData);
      this.hayFotos=true;
      }, (error:any)=>{
        
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
        let filename = 'lindas/'+ Date.now(); //hora.getFullYear()+ hora.getMonth() + hora.getDate() + hora.getHours() + hora.getMinutes() + hora.getSeconds();
        
        let  fotos = await firebase.storage().ref(filename).putString(foto,'data_url');

        await firebase.storage().ref().child(filename).getDownloadURL().then(async (url)=>{
          ImagenAGuardar.path=url;
          ImagenAGuardar.nombre=filename;
          ImagenAGuardar.usuario=this.usuario;
          ImagenAGuardar.votos=new Array<Voto>();
          await this.imgProvider.GuardarData(ImagenAGuardar, "lindas");
      
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
     
    IrAListalindas()
    {
      this.router.navigateByUrl("lista-lindas");
    }

  

  TraerFoto()
  {
    this.imgProvider.TraerFotosLindas().subscribe(arr => {
   
      this.fotos = arr.map(function(mesa, index){
        return mesa;
      });
    });
    console.log(this.fotos);
  }

  MisFotos()
  {
    this.router.navigateByUrl("mis-fotos"); 
  }

}
