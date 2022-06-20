export interface Products{
    id:number,
    title:string,
    discription:string,
    price:number,
    oldprice:number,
    image:string,
    delivery:string,
    category:string,
    bgcolor:string,
    rating:number
}

export enum Category{
    ALL ="all",
    WOMENS ="Womens",
    MENS = "Mens",
    KIDS = "Kids",
    SUNGLASSES = "Sunglasses",
    FOOTWEAR ="Footwear"
}
