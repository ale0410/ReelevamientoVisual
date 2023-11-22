import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ver-imagen-modal-page',
  templateUrl: './ver-imagen-modal-page.page.html',
  styleUrls: ['./ver-imagen-modal-page.page.scss'],
})
export class VerImagenModalPagePage implements OnInit {

  @Input() imagen!: string;

  constructor(private modalController: ModalController) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

}
