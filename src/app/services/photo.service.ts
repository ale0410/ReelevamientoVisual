import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { resolve } from 'dns';
import { finalize } from 'rxjs';
import UserPhoto from '../interface/UserPhoto.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

   //contendra un referencia a cada foto capturada con la camara
   public photos: UserPhoto[] = [];

   constructor(private storage: AngularFireStorage) { }
 
   public async addNewToGallery() {
     // Take a photo
     const capturedPhoto = await Camera.getPhoto({
       resultType: CameraResultType.Uri,
       source: CameraSource.Camera,
       quality: 100
     });
 
     this.photos.unshift({
       filepath: `${new Date().getTime()}.jpg`,
       webviewPath: capturedPhoto.webPath
     });
   }
 
   uploadImage(file: any, path: string, nombre: string): Promise<string>{
     return new Promise( resolve => {
       const filepath = path + "/" + nombre;
       const ref = this.storage.ref(filepath);
       const task =  ref.put(file);
       task.snapshotChanges().pipe(
         finalize( () => {
           ref.getDownloadURL().subscribe( res => {
             const downloadURL = res;
             resolve(downloadURL);
             return;
           })
         })
       )
       .subscribe();
     });
   }
}
