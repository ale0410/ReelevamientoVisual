import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaLindasPage } from './lista-lindas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaLindasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaLindasPageRoutingModule {}
