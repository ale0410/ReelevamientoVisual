import { Component, ViewChild, ElementRef } from '@angular/core';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-galeria-fotos',
  templateUrl: './galeria-fotos.component.html',
  styleUrls: ['./galeria-fotos.component.scss'],
})
export class GaleriaFotosComponent {

  @ViewChild('gallery', { static: true }) gallery!: ElementRef;
  currentImageIndex = 0;
  images = ['ruta/imagen1.jpg', 'ruta/imagen2.jpg', 'ruta/imagen3.jpg']; // Aquí debes agregar las rutas de tus imágenes

  ngAfterViewInit() {
    const galleryEl = this.gallery.nativeElement;

    const hammertime = new Hammer(galleryEl);
    hammertime.on('swipeleft', () => {
      this.showPreviousImage();
    });

    hammertime.on('swiperight', () => {
      this.showNextImage();
    });

    // Aquí puedes definir otro gesto para volver al principio (primera foto)
    // Por ejemplo, si haces un swipe hacia arriba
    hammertime.on('swipeup', () => {
      this.showFirstImage();
    });
  }

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  showPreviousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  showFirstImage() {
    this.currentImageIndex = 0;
  }
}


