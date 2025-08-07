import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { copyFileSync } from 'fs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mens-store',
  imports: [],
  templateUrl: './mens-store.html',
  styleUrl: './mens-store.css'
})
export class MensStore {
category: any;
  size: any;

constructor(private route:ActivatedRoute,private r:Router )
{

}

ngOnInit()
{
  this.route.queryParamMap.subscribe(
    params=>
    {
      console.log(params);
     this.category= params.get('category');
     this.size=params.get('size');
    }
  )
  console.log(this.category);
}


}
