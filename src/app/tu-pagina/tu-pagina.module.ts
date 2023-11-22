import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuPaginaPageRoutingModule } from './tu-pagina-routing.module';

import { TuPaginaPage } from './tu-pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuPaginaPageRoutingModule
  ],
  declarations: [TuPaginaPage]
})
export class TuPaginaPageModule {}
