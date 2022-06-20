import { Component, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { ProductService } from '../product.service';
import { Category, Products } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService:ProductService) { }



    private subscribe!:Subscription



  ngOnInit(): void {
    this.productService.getObs1().subscribe(
      val => console.log(val),
      err => console.log(err),
      ()=> console.log("obs1 complate"));

      this.productService.getObs2().subscribe(
        val => console.log(val),
        err => console.log(err),
        ()=> console.log("obs2 complate"));

      this.subscribe=  this.productService.getObs3().subscribe(
          val => console.log(val),
          err => console.log(err),
          ()=> console.log("obs3 complate"));

          this.productService.getObs4()
          .pipe(filter(val => val%2==0),map(val => val*3))
          .subscribe(val => console.log(val));

        // this.productList=this.productService.getProducts()         //////////////////////////////////////////    imppppppppppppppp
        // this.filterProducts=this.productList

        this.productService.getProducts().subscribe(
          data => {
            this.productList=data
            this.filterProducts=this.productList                              ////   get api through observable 
          }
        )

  }

  productList:Products[]=[]            ////api productlist import in service


  filterProducts=this.productList;

filterProduct(Rcategory:string):void{
  if(Rcategory===Category.ALL)
  {
    this.filterProducts=this.productList;
  }
  else{
    this.filterProducts=this.productList.filter(pro=>pro.category===Rcategory);
  }
}

// searchBy=[]
// filerByName(pName:any){
//   this.searchBy=pName.target.value
// }
private _searchBy="";
get searchBy(){
  return this._searchBy
}

set searchBy(product_name:string){
  this._searchBy=product_name;
  this.filterProducts=this.productList.filter(product=>product.title.toLocaleLowerCase().includes(product_name.toLocaleLowerCase()))
}

// pagination logic start
start_index = 0
end_index = 4
product_per_page = 4
page_no = 1    

next_page(pageNumber:number){
  this.start_index=(pageNumber-1)*this.product_per_page; //start number page
  this.end_index=pageNumber*this.product_per_page;   //end number page
}
// pagination login end

display_rating_from_child(r:number)
{
  console.log(r);
}


// unsubscribe start
unSubscribe()
{
     console.log("unsubscribe sussefully ")

     this.subscribe.unsubscribe()
}

// clicK cart
addToCart(){
  this.productService.updatecounter()
}


}


