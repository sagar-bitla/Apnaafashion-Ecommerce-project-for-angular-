import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductService } from './product.service';

import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { CardsComponent } from './cards/cards.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
     CardsComponent,
     ProfileFormComponent,
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ProductRoutingModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule.forRoot(),
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
