import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VendorsModule } from 'projects/vendors/src/lib/vendors.module';
import { SharedModule } from '../shared/shared.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    VendorsModule,
    SharedModule
  ]
})
export class HomepageModule { }
