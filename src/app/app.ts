import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlobOptions } from 'buffer';
import { TestPipe } from './test-pipe';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,TestPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Demo');
  public name:String="Srinivas Lingampelli"

  Greeting( name:string )
  {
    return "Welcome! "+ name;
  }

  date:String=new Date().toLocaleDateString();
   time:String=new Date().toLocaleTimeString();

  //  -------------Property Binding----------

  isEnabled:boolean=true;
  isHidden:boolean=true;

  image_url="https://tse2.mm.bing.net/th/id/OIP.8gGK6KfclbrYsg5CgDeIJwHaE1?rs=1&pid=ImgDetMain&o=7&rm=3";

  // -----------------Class Binding--------------
  isActive:boolean=false;
  count:number=0;

  Increment()
  {
this.count+=1;
  }

    Decrement()
  {
this.count-=1;
  }

  Nick_name:String="";
  
    city:string="Hyderabad";

  onChange(e:any)
  {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    this.Nick_name=e.target.value;

    console.log(this.city);
  }

  onchng(e:any)
  {
console.log(this.city);
  }


// ------------Two way Binding---------------

optionSelected:string="";

// -----------------------ngIf----------------

ngif:boolean=true;

age:number=19;


// -----------------------ngFor----------------

movies=["A","B","C","D","E"]




choice:string="Banana";

// -----------------Custom Pipe------------

myPipe:string="hello world";



}
