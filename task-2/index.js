 class Product{
    name;
    price;
    category;
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    discount(amount){
        console.log("discount for this item is:",amount)
    }
    priceafterdiscount(price){
        console.log("price after getting discount:",price)
    }
 }
 var product1=new Product("white trouser",400,"trouser")
 product1.discount(40);
 product1.priceafterdiscount(390);
 console.log("----------------------")
 var p2=new Product("t-shirt",150,"teamsprit");
 p2.discount(15);
 p2.priceafterdiscount(135);