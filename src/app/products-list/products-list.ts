import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList {

  constructor(private route:ActivatedRoute)
  {
    
  }

  urlId:any;

  ngOnInit()
  {

    // this.route.paramMap.subscribe(
    //   params=>{

    //     console.log("Params : "+params)
    //      this.urlId=params.get('id');
    //   }
    // )

    this.urlId=this.route.snapshot.paramMap.get("id");

  }

}

