import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VendorsModule } from 'projects/vendors/src/lib/vendors.module';
import { SharedModule } from '../shared/shared.module';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './collections.component';


@NgModule({
  declarations: [
    CollectionsComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    VendorsModule,
    SharedModule
  ]
})
export class CollectionsModule { }
