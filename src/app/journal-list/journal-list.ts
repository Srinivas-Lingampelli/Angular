import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { response } from 'express';
import { copyFileSync } from 'fs';

@Component({
  selector: 'app-journal-list',
  imports: [CommonModule,],
  templateUrl: './journal-list.html',
  styleUrl: './journal-list.css'
})
export class JournalList {
 
  hover = false;


  constructor(private http:HttpClient)
  {
 
  }

  journals: any;

  getData() {
    this.http.get("http://localhost:8080/journals")
      .subscribe(response => {
        this.journals = response;
        console.log("Data:", this.journals);
      });
  }

deleteTheJournal(journalId: number) {
  this.http.delete(`http://localhost:8080/journals/id/${journalId}`).subscribe({
    next: () => {
      console.log('Journal Deleted');
    },
    error: err => {
      console.error('Delete failed:', err);
    }
  });
}


 



}
