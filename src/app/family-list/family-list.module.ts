import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilyListPageRoutingModule } from './family-list-routing.module';

import { FamilyListPage } from './family-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamilyListPageRoutingModule
  ],
  declarations: [FamilyListPage]
})
export class FamilyListPageModule {}
