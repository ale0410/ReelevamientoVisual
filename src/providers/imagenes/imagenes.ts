import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { Voto } from '../../app/clases/Voto';
import { Usuario } from '../../app/clases/Usuario';
import { Imagen } from '../../app/clases/Imagen';
//import { storage, initializeApp } from 'firebase';
//import { FIREBASE_CONFIG } from '../../app/firebase.config';

/*
  Generated class for the ImagenesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImagenesProvider {

  private fotosFirebase!: AngularFirestoreCollection<Imagen>;
  private fotosObservable!: Observable<Imagen[]>;
  private usuario:Usuario;

  constructor(private objFirebase: AngularFirestore) {
  this.usuario= JSON.parse(sessionStorage.getItem("usuario")!);
  }

   TraerFotosFeas(){
    this.fotosFirebase = this.objFirebase.collection<Imagen>("feas");
    //this.fotosObservable = this.fotosFirebase.valueChanges();
    return this.fotosFirebase.valueChanges();
  }

  TraerFotosLindas()
  {
    this.fotosFirebase = this.objFirebase.collection<Imagen>("lindas");
    //this.fotosObservable = this.fotosFirebase.valueChanges();
    return this.fotosFirebase.valueChanges();
  }


async GuardarData(imagenData:any, tipo:any)
{
  let idBd=this.objFirebase.createId();
  let obj={
    "id": idBd,
    "nombre":imagenData.nombre,
    "path": imagenData.path,
    "usuario": imagenData.usuario,
    "positivo":0,
    "negativo":0
  }
  this.objFirebase.collection<any>(tipo).doc(idBd).set(obj).then((data)=>{
   console.log(data);
 }).catch((data)=>{
   console.log(data);
 })
}

 TraerUrl(nombre:any)
{
  let path;
   firebase.storage().ref().child(nombre).getDownloadURL().then((url)=>{
    path=url;

   console.log(url);
  }).catch((data)=>{
    console.log(data);
  });
   return path;

}

VotarNegativo(img:any, tipo:any)
{

console.log(img);
  img.negativo++;
  this.objFirebase.collection(tipo).doc(img.id).update(img).then((data)=>
{
  console.log(data);
})
}

VotarPositivo(img:any, tipo:any)
{


  img.positivo++;
  console.log(img);
  this.objFirebase.collection(tipo).doc(img.id).update(img).then((data)=>
{
  console.log(data);
})
}

}
