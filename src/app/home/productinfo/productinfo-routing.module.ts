import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [

  {
    path: 'product/:id',
    component: ProductinfoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductinfoRoutingModule { }
