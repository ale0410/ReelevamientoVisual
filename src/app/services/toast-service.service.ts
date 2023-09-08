import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  constructor(private toastController: ToastController) { }

  async presentToast(message: string, color?: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });

    await toast.present();
  }
}
