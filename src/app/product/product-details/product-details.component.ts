import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { Products } from 'src/app/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private productservice:ProductService
  ) { }

  receivedProduct$!:Observable<Products | undefined>
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    console.log(id);
    this.receivedProduct$=this.productservice.getIdBasedProduct(id)
  }

}
