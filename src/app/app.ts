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

}
