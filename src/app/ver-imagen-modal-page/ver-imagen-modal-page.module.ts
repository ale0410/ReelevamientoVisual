import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerImagenModalPagePageRoutingModule } from './ver-imagen-modal-page-routing.module';

import { VerImagenModalPagePage } from './ver-imagen-modal-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerImagenModalPagePageRoutingModule
  ],
  declarations: [VerImagenModalPagePage]
})
export class VerImagenModalPagePageModule {}
