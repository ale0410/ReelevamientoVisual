import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { FirestoresService } from '../services/firestores.service';
import { AuthService } from '../services/auth.service';
import Item from '../interface/Item.interface';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ToastServiceService } from '../services/toast-service.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  tipo: string | null = '';
  newItem: Item = {} as Item;
  imageCargada = '';
  newFile = '';
  uploading = false;

  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
      handler: () => this.cancelar(),
    },
  ];
  user: string | null | undefined;
  constructor(
    private route: ActivatedRoute,
    public photoService: PhotoService,
    public firestores: FirestoresService,
    public loginService: AuthService,
    public auth: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastServiceService: ToastServiceService
  ) {
    this.tipo = this.route.snapshot.paramMap.get('type');
    this.newItem.tipo = this.tipo;
  }

  ngOnInit() {
    this.loginService.obtenerUsuario().then(userData => {
      this.user = userData?.email;
      console.log(this.user);
 });
  
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async subirImagenes() {
    this.uploading = true;
    const loading = await this.loadingCtrl.create({
      spinner: 'lines', 
      cssClass: 'custom-loading'
    });
    await loading.present();
    try {
      const path = 'Galeria';
      this.newItem.name = this.user!;
      for (const photo of this.photoService.photos) {
        if (photo.webviewPath) {
          const file = await this.readAsBlob(photo.webviewPath);
          const name = this.generateFileName();
          const res = await this.photoService.uploadImage(file, path, name);
          this.newItem.id = this.generateUniqueId();
          this.newItem.image = res;
          this.newItem.fecha = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' });
          const response = await this.firestores.addItem(this.newItem);
          console.log(response);
        }
      }
      this.photoService.photos = [];
      this.toastServiceService.presentToast("Se cargo con exito", "success")
    } catch (error) {
      console.error(error);
      this.toastServiceService.presentToast("Error al subir las imagenes", "danger")
    } finally {
      this.uploading = false;
      await loading.dismiss();
    }
  }

  async readAsBlob(webPath: string): Promise<Blob> {
    const response = await fetch(webPath);
    return await response.blob();
  }

  generateFileName(): string {
    return `${new Date().getTime()}.jpg`;
  }
  generateUniqueId(): string {
    const timestamp = new Date().getTime();
    const randomValue = Math.floor(Math.random() * 1000000);
    return `${timestamp}-${randomValue}`;
  }
  cancelar() {
    this.toastServiceService.presentToast('Eliminando fotos...','danger');

    setTimeout(() => {
      this.photoService.photos = [];
      this.router.navigate(['/tabs']);
    }, 2000);
  }

}
