import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VendorsModule } from 'projects/vendors/src/public-api';
import { SharedModule } from '../shared/shared.module';
import { CollectionItemRoutingModule } from './collection-item-routing.module';
import { CollectionItemComponent } from './collection-item.component';


@NgModule({
  declarations: [
    CollectionItemComponent
  ],
  imports: [
    CommonModule,
    CollectionItemRoutingModule,
    VendorsModule,
    SharedModule
  ]
})
export class CollectionItemModule { }
