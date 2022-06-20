import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { SymbolToSpacePipe } from './symbol-to-space.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponent,
    SymbolToSpacePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarComponent,SymbolToSpacePipe,FormsModule,ReactiveFormsModule
  ]
})
export class SharedModule { }
