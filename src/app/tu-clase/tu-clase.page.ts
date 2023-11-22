import { Component, OnInit } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { VerImagenModalPagePage } from '../ver-imagen-modal-page/ver-imagen-modal-page.page';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tu-clase',
  templateUrl: './tu-clase.page.html',
  styleUrls: ['./tu-clase.page.scss'],
})
export class TuClasePage implements OnInit {

  accelerationSubscription!: Subscription;
  fotos: string[] = ['ruta_foto_1.jpg', 'ruta_foto_2.jpg', 'ruta_foto_3.jpg'];
  indiceFotoActual: number = 0;
  rutaFotoActual!: string;

  constructor(private deviceMotion: DeviceMotion, private modalController: ModalController) {}

  ngOnInit() {
    
  }

  startWatchingAcceleration() {
    const options = { frequency: 200 }; // Frecuencia de actualización del sensor (en milisegundos)

    this.accelerationSubscription = this.deviceMotion.watchAcceleration(options)
      .subscribe((acceleration: DeviceMotionAccelerationData) => {
        // Utiliza los datos del acelerómetro para detectar el movimiento y cambiar entre fotos
        if (acceleration.x > 7) {
          // Cambiar a la foto siguiente
          this.mostrarSiguienteFoto();
        } else if (acceleration.x < -7) {
          // Cambiar a la foto anterior
          this.mostrarFotoAnterior();
        }
      });
  }

  stopWatchingAcceleration() {
    this.accelerationSubscription.unsubscribe();
  }

  // Funciones para mostrar fotos
  mostrarSiguienteFoto() {
    // Lógica para mostrar la siguiente foto
    if (this.indiceFotoActual < this.fotos.length - 1) {
      this.indiceFotoActual++;
    } else {
      this.indiceFotoActual = 0; // Volver al principio si ya estás en la última foto
    }
    // Actualizar la ruta de la foto que se muestra en tu vista
    // Por ejemplo, si tienes una variable para la ruta de la imagen actual:
    this.rutaFotoActual = this.fotos[this.indiceFotoActual];
  }

  mostrarFotoAnterior() {
    // Lógica para mostrar la foto anterior
    if (this.indiceFotoActual > this.fotos.length + 1) {
      this.indiceFotoActual--;
    } else {
      this.indiceFotoActual = 0; // Volver al principio si ya estás en la última foto
    }
    // Actualizar la ruta de la foto que se muestra en tu vista
    // Por ejemplo, si tienes una variable para la ruta de la imagen actual:
    this.rutaFotoActual = this.fotos[this.indiceFotoActual];
  }

  async verImagen(rutaImagen: string) {
    const modal = await this.modalController.create({
      component: VerImagenModalPagePage, // Componente modal para ver la imagen
      componentProps: {
        imagen: rutaImagen // Pasar la ruta de la imagen al componente modal
      }
    });
    return await modal.present();
  }
  
  ionViewDidEnter() {
    this.startWatchingAcceleration();
  }

  ionViewWillLeave() {
    this.stopWatchingAcceleration();
  }

}
