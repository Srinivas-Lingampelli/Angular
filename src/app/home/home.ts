import { Component } from '@angular/core';
import { Test } from '../test';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

 mobiles:any;
  
  constructor(public ts:Test)
  {
    this.mobiles=ts.mobiles;
  }


}
