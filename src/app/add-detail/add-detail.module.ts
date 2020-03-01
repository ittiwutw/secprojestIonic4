import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDetailPageRoutingModule } from './add-detail-routing.module';

import { AddDetailPage } from './add-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDetailPageRoutingModule
  ],
  declarations: [AddDetailPage]
})
export class AddDetailPageModule {}
