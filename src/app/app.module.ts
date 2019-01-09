import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuotesComponent } from "./quotes/quotes.component";
import { SearchComponent } from "./search/search.component";
import { BackgroundComponent } from "./background/background.component";

import { QuotesService } from "./services/quotes.service";

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    SearchComponent,
    BackgroundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
