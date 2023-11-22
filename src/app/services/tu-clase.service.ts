import { Injectable } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TuClaseService {

  accelerationSubscription!: Subscription;
  fotos: string[] = ['ruta_foto_1.jpg', 'ruta_foto_2.jpg', 'ruta_foto_3.jpg'];
  indiceFotoActual: number = 0;
  rutaFotoActual!: string;

  constructor(private deviceMotion: DeviceMotion) {}

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
  
  ionViewDidEnter() {
    this.startWatchingAcceleration();
  }

  ionViewWillLeave() {
    this.stopWatchingAcceleration();
  }
}
