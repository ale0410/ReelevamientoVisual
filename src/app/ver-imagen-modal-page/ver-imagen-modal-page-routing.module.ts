import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerImagenModalPagePage } from './ver-imagen-modal-page.page';

const routes: Routes = [
  {
    path: '',
    component: VerImagenModalPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerImagenModalPagePageRoutingModule {}
