import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuClasePageRoutingModule } from './tu-clase-routing.module';

import { TuClasePage } from './tu-clase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuClasePageRoutingModule
  ],
  declarations: [TuClasePage]
})
export class TuClasePageModule {}
