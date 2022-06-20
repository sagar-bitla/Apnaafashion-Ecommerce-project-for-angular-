import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';




const routes:Routes=[
  {path:"Home",component:HomeComponent},
  {path:"profile",component:ProfileFormComponent},
  {path:"products",loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)}, //  ------------ LAZY LOADING 
  {path:"",redirectTo:"/Home",pathMatch:'full'},
  {path:"**",redirectTo:"/Home",pathMatch:'full'}
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
