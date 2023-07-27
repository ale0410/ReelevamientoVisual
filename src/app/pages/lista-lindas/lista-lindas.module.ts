import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaLindasPageRoutingModule } from './lista-lindas-routing.module';

import { ListaLindasPage } from './lista-lindas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaLindasPageRoutingModule
  ],
  declarations: [ListaLindasPage]
})
export class ListaLindasPageModule {}
