import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ImagenesProvider } from 'src/providers/imagenes/imagenes';
import { Imagen } from 'src/app/clases/Imagen';
import { Usuario } from 'src/app/clases/Usuario';

@Component({
  selector: 'app-mis-fotos',
  templateUrl: './mis-fotos.page.html',
  styleUrls: ['./mis-fotos.page.scss'],
})

export class MisFotosPage {

  usuario: Usuario;
  fotosLindas: Array<Imagen>;
  fotosFeas: Array<Imagen>;
  fotos: Array<Imagen>;
  fotosFiltradas:Array<Imagen>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private imgsProv: ImagenesProvider) {
    this.usuario= JSON.parse(sessionStorage.getItem("usuario")!);
    this.fotosLindas=new Array<Imagen>();
    this.fotosFeas=new Array<Imagen>();
    this.fotos=new Array<Imagen>();
    this.fotosFiltradas =new Array<Imagen>();
    this.TraerFotos();
  
    console.log(this.fotosFeas);
    console.log(this.fotosLindas);
    console.log(this.fotos);

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad MisFotosPage');
  }

 async TraerFotos()
  {
   await this.imgsProv.TraerFotosLindas().subscribe(arr => {
   
       arr.forEach((foto: Imagen)=> {
        
        if(foto.usuario.correo == this.usuario.correo)
        {
          this.fotos.push(foto);
        }
        
      });
    });
    

   await this.imgsProv.TraerFotosFeas().subscribe(arr => {
   
     arr.forEach((foto: Imagen) => {

      if(foto.usuario.correo == this.usuario.correo)
      {
        this.fotos.push(foto);
      }
    });
      
    });
    
    this.fotos.forEach((element, index) => {
      console.log(element);
    });

   console.log("foto", this.fotos);
   ;

  this.fotosFiltradas = this.fotos.filter(foto=>foto.usuario.correo== this.usuario.correo);

console.log("filtradass",this.fotosFiltradas);



  }

}
