import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TuPaginaService {

  photos!: any[]; // Supongamos que tienes un arreglo de fotos
  images!: any[]; // Supongamos que tienes un arreglo de imágenes

  constructor(private firestore: AngularFirestore) {
    this.getPhotos();
    this.getImages();
  }

  getPhotos() {
    this.firestore.collection('fotos').valueChanges().subscribe((data: any[]) => {
      this.photos = data;
    });
  }

  getImages() {
    this.firestore.collection('imagenes').valueChanges().subscribe((data: any[]) => {
      this.images = data;
    });
  }

  showNextPhoto(currentIndex: number) {
    // Lógica para mostrar la siguiente foto
    // Por ejemplo, puedes manejar un índice para mostrar la siguiente imagen en la lista de fotos
    if (currentIndex < this.photos.length - 1) {
      // Aquí cambia la lógica para mostrar la siguiente foto
      const nextPhoto = this.photos[currentIndex + 1];
      console.log('Siguiente foto:', nextPhoto);
      // Aquí puedes hacer algo con la siguiente foto, como mostrarla en la interfaz de usuario
    } else {
      console.log('No hay más fotos');
      // Puedes manejar la situación en la que ya no hay más fotos por mostrar
    }
  }

  showPreviousPhoto(currentIndex: number) {
    // Lógica para mostrar la siguiente foto
    // Por ejemplo, puedes manejar un índice para mostrar la siguiente imagen en la lista de fotos
    if (currentIndex > this.photos.length + 1) {
      // Aquí cambia la lógica para mostrar la siguiente foto
      const previousPhoto = this.photos[currentIndex - 1];
      console.log('Foto anterior:', previousPhoto);
      // Aquí puedes hacer algo con la siguiente foto, como mostrarla en la interfaz de usuario
    } else {
      console.log('No hay más fotos');
      // Puedes manejar la situación en la que ya no hay más fotos por mostrar
    }
  }

  viewImage(imageUrl: string) {
    // Lógica para ver la imagen cuando haces clic en el gráfico
    console.log('URL de la imagen:', imageUrl);
    // Aquí puedes abrir un modal, una nueva página o una ventana con la imagen
    // Puedes usar la URL de la imagen para mostrarla en un componente de la interfaz de usuario
    // Por ejemplo, puedes pasar la URL a un componente de imagen para que se muestre al hacer clic
  }
}
