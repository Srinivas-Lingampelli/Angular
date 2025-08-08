import { Component } from '@angular/core';
import { Test } from '../test';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
 mobiles: any;
  constructor( public ts:Test)
  {
this.mobiles=ts.mobiles;
  }


  

}
