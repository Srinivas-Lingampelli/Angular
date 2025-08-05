import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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

  onChange(e:any)
  {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    this.Nick_name=e.target.value;
  }


}
