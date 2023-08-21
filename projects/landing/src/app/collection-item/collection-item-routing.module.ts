import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionItemComponent } from './collection-item.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionItemRoutingModule { }
