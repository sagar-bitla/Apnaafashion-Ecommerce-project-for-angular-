import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, observable, Observable, of, Subject } from "rxjs";
import { Category, Products } from "./products";


@Injectable(
    {
        providedIn:"root"
    }
)

export class ProductService
{
    constructor( private http:HttpClient) {}
   
    private obs1$ = of(1,2,5,"hii",[40,20])        // create observeble  ...$= this is not important but this symbol is shows we create observable 

    getObs1():Observable<any>     // return observale.....
    {
        return this.obs1$
    }

    private obs2$ = new Observable(
        observer => {
            observer.next(12);
            observer.next("hii");
            observer.next([1,12,"byee"]);
            observer.complete()
        })

    getObs2():Observable<any>
    {
        return this.obs2$
    }        

    private obs3$ = new Observable(
        observer => {
            observer.next("data 1");
            observer.next("data 2");
            setTimeout(() => {
                observer.next("data 3")
            },4000);
            observer.next("data 4");
            // observer.complete()
        })

    getObs3():Observable<any>
    {
        return this.obs3$
    }        

    private obs4$ = of(1,2,3,4,5,6)        

    getObs4():Observable<any>     
    {
        return this.obs4$
    }

    // logic for adding into cart

    private counter:number=0
    counter$ = new Subject<number>()
    updatecounter(){
        this.counter++;
        this.counter$.next(this.counter)
    }
    getCounter():Subject<number>
    {
        return this.counter$
    }

    // cart end

    //object api



    productList: Products[]=[
        {
            id:1,
            title:"One piece",
            discription:"Women black silk blend embroided unstitched dress",
            price:799,
            oldprice:999,
            image:"assets/images/blackdress.jpg",
            delivery:"FREE Delivery by Apnaa Fashion",
            category:Category.WOMENS,
            bgcolor:"blue",
            rating:3.5
          },
          {
            id:2,
            title:"waistcoat",
            discription:"Men bleneded V neck 5 button waistcoat,blazzer",
            price:1200,
            oldprice:1500,
            image:"assets/images/waistcoat.jpg",
            delivery:"FREE Delivery by Apnaa Fashion",
            category:Category.MENS,
            bgcolor:"blue",
            rating:3.9
          },
          
          {
            id:3,
            title:" Black Sunglass",
            discription:"Blac gradient square sunglasess with fashionable design",
            price:450,
            oldprice:600,
            image:"assets/images/sunglass.jpeg",
            delivery:"FREE Delivery by Apnaa Fashion",
            category:Category.SUNGLASSES,
            bgcolor:"blue",
            rating:2.2
          },
         
          {
            id:4,
            title:"women footwear",
            discription:"High red heels women with fashinable design  ",
            price:900,
            oldprice:1000,
            image:"assets/images/ladiesfootwear.png",
            delivery:"FREE Delivery by Apnaa Fashion",
            category:Category.FOOTWEAR,
            bgcolor:"blue",
            rating:3.4
          },
          {
            id:5,
            title:"kid party wear dress",
            discription:"kids party wear dress at best price in apnaa fasion ",
            price:899,
            oldprice:999,
            image:"assets/images/kidsdress.jpg",
            delivery:"FREE Delivery by Apnaa Fashion",
            category:Category.KIDS,
            bgcolor:"blue",
            rating:3.8
          },
          {
            id:6,
            title:"little boy dress",
            discription:"little boy paint and shirt with best price",
            price:500,
            oldprice:800,
            image:"assets/images/kidsmendress.jpg",
            delivery:"FREE Delivery by Apnaa Fashion",
            category:Category.KIDS,
            bgcolor:"blue",
            rating:1.9
          },
          { 
            id:7,
            title:"Men kurta",
            discription:"men kurta indo western dress at best in apnaa fashion",
            price:1300,
            oldprice:1500,
            image:"assets/images/menkurta.jpg",
            delivery:"FREE Delivery by Apnaa Fashion",
            category:Category.MENS,
            bgcolor:"blue",
            rating:4.2
          },
          {
            id:8,
            title:"kolapur chappal",
            discription:"kolapuri cahppal are made from leather that is cured.",
            price:550,
            oldprice:700,
            image:"assets/images/kolapur.jpg",
            delivery:"FREE Delivery by Apnaa Fashion",
            category:Category.FOOTWEAR,
            bgcolor:"cream ",
            rating:3.6
          },
          {
            id:9,
            title:"Red Salwar",
            discription:"Women red salwar semi-stitched maxi dress",
            price:699,
            oldprice:899,
            image:"assets/images/reddress.jpg",
            delivery:"FREE Delivery by Apnaa Fashion",
            category:Category.WOMENS,
            bgcolor:"blue",
            rating:3.2
          }
    ]

      getProducts(){
        //   return of(this.productList)
        return this.http.get<Products[]>("http://localhost:4200/assets/products.json")
      }

      getIdBasedProduct(id:number)
      {
        return this.http.get<Products[]>("http://localhost:4200/assets/products.json").pipe(map(products  => 
        {
          return products.find(product => product.id===id)
      }
      ))}

}