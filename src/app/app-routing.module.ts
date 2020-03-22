import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'add-detail',
    loadChildren: () => import('./add-detail/add-detail.module').then( m => m.AddDetailPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'update-detail',
    loadChildren: () => import('./update-detail/update-detail.module').then( m => m.UpdateDetailPageModule)
  },
  {
    path: 'add-family',
    loadChildren: () => import('./add-family/add-family.module').then( m => m.AddFamilyPageModule)
  },
  {
    path: 'family-list',
    loadChildren: () => import('./family-list/family-list.module').then( m => m.FamilyListPageModule)
  },
  {
    path: 'notification-list',
    loadChildren: () => import('./notification-list/notification-list.module').then( m => m.NotificationListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
