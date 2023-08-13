import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { VendorsComponent } from './vendors.component';


@NgModule({
  declarations: [
    VendorsComponent
  ],
  imports: [
    NzGridModule,
    NzLayoutModule
  ],
  exports: [
    VendorsComponent,
    NzGridModule,
    NzLayoutModule
  ]
})
export class VendorsModule { }
