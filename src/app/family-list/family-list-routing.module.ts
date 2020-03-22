import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyListPage } from './family-list.page';

const routes: Routes = [
  {
    path: '',
    component: FamilyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyListPageRoutingModule {}
