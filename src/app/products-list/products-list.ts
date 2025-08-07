// src/app/products-list/products-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test } from '../test';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports:[CommonModule],
  templateUrl: './products-list.html',
  styleUrls: ['./products-list.css']
})
export class ProductsList implements OnInit {

  products: { id: number; name: string; price: number; category: string; }[] = [];
  urlId: number = 0;
  selectedProduct: any;

  constructor(private route: ActivatedRoute, public ts: Test) {
    this.products = ts.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }

  ngOnInit() {
        // this.route.paramMap.subscribe(
    //   params=>{

    //     console.log("Params : "+params)
    //      this.urlId=params.get('id');
    //   }
    // )
    this.urlId = Number(this.route.snapshot.paramMap.get("id"));
    this.selectedProduct = this.getProductById(this.urlId);
    console.log("URL ID:", this.urlId);
    console.log("Found product:", this.selectedProduct);
  }
}
