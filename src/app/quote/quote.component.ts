import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Quote} from '../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quote: Quote;
  @Output() uppoll = new EventEmitter<boolean>();
  // upvote = 0;
  // downvote = 0;
  // up() {
  //  this.upvote = this.upvote + 1;
  }

  down() {
    this.downvote = this.downvote + 1;
  }
// tslint:disable-next-line: member-ordering
  quotes = [
    new Quote('Confucius', 'Muchui', 'Our greatest glory is not in never falling, but in rising every time we fall.', new Date(2014, 2, 1)),
    new Quote('Walt Disney', 'Kaigongi', 'All our dreams can come true, if we have the courage to pursue them.', new Date(2019, 4, 2)),
// tslint:disable-next-line: max-line-length
    new Quote ('Winston Churchill', 'Victor', 'Success is not final, failure is not fatal: it is the courage to continue that counts.', new Date(2019, 3, 26)),
  ];
    // toogleDetails(index) {
    // this.quotes[index].showDescription = !this.quotes[index].showDescription;
    // }
    // addNewQuote(quote) {
    //   let quoteLength = this.quotes.length;
    //   quote.id = quoteLength + 1;
    //   quote.submissionDate = new Date(quote.submissionDate);
    //   this.quotes.push(quote);

  }

    constructor() { }

    ngOnInit() {
  }

}
