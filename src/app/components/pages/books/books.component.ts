import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Book[] = [];

  constructor(private bookService:BookService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks(){
    this.bookService.getBooks().subscribe(response=>{
      this.books = response.data
    })
  }

}
