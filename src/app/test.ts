import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Test {

  mobiles=["Iphone","Redmi","Vivo","IQ Phone","Samsung S24"];

   products = [
  { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 20000, category: "Electronics" },
  { id: 3, name: "Shoes", price: 3000, category: "Fashion" },
  { id: 4, name: "Book", price: 500, category: "Education" },
  { id: 5, name: "Headphones", price: 1500, category: "Accessories" }
];
  
}
