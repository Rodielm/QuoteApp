import { Component, OnInit, Input } from "@angular/core";
import { QuotesService } from "../services/quotes.service";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  @Input() tagName: String;

  QuoteDay: String;

  constructor(private quoteService: QuotesService) {}

  ngOnInit() {
    this.getQuoteOfDay();
  }

  getQuoteOfDay() {
    this.quoteService.getQuoteofDay().subscribe(data => {
      this.QuoteDay = data.quote.body;
    });
  }

  nextQuote() {}

  previousQuote() {}
}
