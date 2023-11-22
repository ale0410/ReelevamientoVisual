import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuPaginaPage } from './tu-pagina.page';

const routes: Routes = [
  {
    path: '',
    component: TuPaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuPaginaPageRoutingModule {}
