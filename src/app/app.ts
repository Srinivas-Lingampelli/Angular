import { Component, signal,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlobOptions } from 'buffer';
import { TestPipe } from './test-pipe';

import { Header } from './header/header';

import { ViewChild } from '@angular/core';
import { RouterModule} from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Router } from '@angular/router';

import { RouterLink } from '@angular/router';
import { Test } from './test';
@Component({
  selector: 'app-root',
   standalone: true,
   providers: [Test],
  imports: [RouterOutlet,RouterModule,FormsModule,CommonModule,TestPipe,Header],
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


// template reference-----------

templateData="";
placeHolder="";

buttonClicked(msg:string)
{
  this.templateData=msg;
  console.log(this.templateData)
}

dataFromparent="hello Child";


// ---------------input Decorator-----------------------



numbers="this is Numbers";



// ---------------Output Decorator-----------------------
cdata:string="";


pa_to_Child:string="";


// --------------------ViewChild Decorator-----------------------
@ViewChild(Header) header1: any

test()
{
  console.log(this.header1.data)
}


@ViewChild('domTreeEle') divEle:any;

changeDiv()
{

  this.divEle.nativeElement.style.background="blue"
   console.log(this.divEle.nativeElement.textContent);
  console.log(this.divEle.nativeElement.InnerHTML);
  // this.divEl
}


constructor(private r:Router)
{

}
ngOnInit()
{
  
}

navigateee()
{
this.r.navigate(["products",2])
}

navigatestyle()
{
this.r.navigate(["Styles"],{
  queryParams:{
    'category':"Mens Store",'size':32
  }
})
}



}
