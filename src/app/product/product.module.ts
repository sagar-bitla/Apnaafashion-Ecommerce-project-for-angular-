import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ReviewFormComponent } from './review-form/review-form.component';



@NgModule({
  declarations: [
    ProductComponent,
   ProductDetailsComponent,
   ReviewFormComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
