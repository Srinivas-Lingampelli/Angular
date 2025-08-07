import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({

  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  constructor(private http: HttpClient) {}

  data: any;

  getData() {
    this.http.get("https://fakestoreapi.com/products?limit=5")
      .subscribe(response => {
        this.data = response;
        console.log("Data:", this.data);
      });
  }
}
