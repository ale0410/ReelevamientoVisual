import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuClasePage } from './tu-clase.page';

const routes: Routes = [
  {
    path: '',
    component: TuClasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuClasePageRoutingModule {}
