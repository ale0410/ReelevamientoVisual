import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'feas',
    loadChildren: () => import('./pages/feas/feas.module').then( m => m.FeasPageModule)
  },
  {
    path: 'lindas',
    loadChildren: () => import('./pages/lindas/lindas.module').then( m => m.LindasPageModule)
  },
  {
    path: 'lista-feas',
    loadChildren: () => import('./pages/lista-feas/lista-feas.module').then( m => m.ListaFeasPageModule)
  },
  {
    path: 'lista-lindas',
    loadChildren: () => import('./pages/lista-lindas/lista-lindas.module').then( m => m.ListaLindasPageModule)
  },
  {
    path: 'mis-fotos',
    loadChildren: () => import('./pages/mis-fotos/mis-fotos.module').then( m => m.MisFotosPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
