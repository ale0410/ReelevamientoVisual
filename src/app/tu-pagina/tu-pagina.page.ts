import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';
import { VerImagenModalPagePage } from '../ver-imagen-modal-page/ver-imagen-modal-page.page';

@Component({
  selector: 'app-tu-pagina',
  templateUrl: './tu-pagina.page.html',
  styleUrls: ['./tu-pagina.page.scss'],
})
export class TuPaginaPage implements OnInit {

  user: any; // Variable para almacenar la información del usuario
  userPhotos!: any[]; // Arreglo para las fotos del usuario
  images!: any[]; // Supongamos que tienes un arreglo de imágenes

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth, private modalController: ModalController) {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.getUserPhotos(user.uid);
      } else {
        // El usuario no está autenticado, puedes redirigirlo al inicio de sesión o mostrar un mensaje
      }
    });

    this.getImages();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getImages() {
    this.firestore.collection('imagenes').valueChanges().subscribe((data: any[]) => {
      this.images = data;
    });
  }

  async viewImage(imageUrl: string) {
    // Lógica para ver la imagen cuando haces clic en el gráfico
    const modal = await this.modalController.create({
      component: VerImagenModalPagePage,
      componentProps: {
        imagen: imageUrl
      }
    });
    return modal.present();
    console.log('URL de la imagen:', imageUrl);
    // Aquí puedes abrir un modal, una nueva página o una ventana con la imagen
    // Puedes usar la URL de la imagen para mostrarla en un componente de la interfaz de usuario
    // Por ejemplo, puedes pasar la URL a un componente de imagen para que se muestre al hacer clic
  }

  getUserPhotos(userId: string) {
    this.firestore.collection('fotos', ref => ref.where('userId', '==', userId))
      .valueChanges()
      .subscribe((data: any[]) => {
        this.userPhotos = data;
      });
  }

}
