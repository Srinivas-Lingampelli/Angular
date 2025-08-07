import { Component } from '@angular/core';
import { Test } from '../test';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

 mobiles:any;
m: any;
 products :any;

  
  constructor(public ts:Test  )
  {
    this.mobiles=ts.mobiles;
    this.products=ts.products;

  }
  // Example: List of products




}
