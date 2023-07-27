import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaFeasPage } from './lista-feas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaFeasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaFeasPageRoutingModule {}
