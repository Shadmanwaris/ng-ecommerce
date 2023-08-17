import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VendorsModule } from 'projects/vendors/src/lib/vendors.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SubscriptionComponent } from './subscription/subscription.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    VendorsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SubscriptionComponent,
  ]
})
export class SharedModule { }
