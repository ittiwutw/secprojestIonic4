import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDetailPage } from './add-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AddDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDetailPageRoutingModule {}
