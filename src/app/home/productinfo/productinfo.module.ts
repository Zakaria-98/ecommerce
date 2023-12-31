import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductinfoRoutingModule } from './productinfo-routing.module';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { MainComponent } from '../main/main/main.component';
import {MatIconModule} from '@angular/material/icon';
import { InfoComponent } from './info/info.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductinfoComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    ProductinfoRoutingModule,
    MatIconModule,
    FormsModule
  ]
})
export class ProductinfoModule { }
