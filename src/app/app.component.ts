import { Component, OnInit} from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'apnaafashion';
  constructor(
    private productService:ProductService
  ){}
  product_counter=0
  ngOnInit(): void {
    this.productService.getCounter().subscribe(
      val=> this.product_counter=val
    )
  }
}
