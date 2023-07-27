import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaFeasPageRoutingModule } from './lista-feas-routing.module';

import { ListaFeasPage } from './lista-feas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaFeasPageRoutingModule
  ],
  declarations: [ListaFeasPage]
})
export class ListaFeasPageModule {}
