import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import config from "../config/config";

@Injectable({
  providedIn: "root"
})
export class QuotesService {
  configUrl = config;

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.configUrl.API_KEY
    })
  };

  constructor(private httpClient: HttpClient) {}

  getQuoteofDay(): Observable<any> {
    return this.httpClient.get(`${this.configUrl.API_URL}/qotd`);
  }

  getQuoteByTag(tag: String): Observable<any> {
    return this.httpClient.get(
      `${this.configUrl.API_URL}/quotes/?filter=${tag}&type=tag`,
      this.httpOptions
    );
  }

  getQuotes() {}
}
