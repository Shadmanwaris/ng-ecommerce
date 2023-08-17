import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'collections',
    loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule)
  },
  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
