import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [RouterLink,CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  constructor(private r:Router)
  {

  }

  navigateToCHild()
{
this.r.navigate(["child"]);
}

}


