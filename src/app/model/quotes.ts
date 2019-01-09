import { Quote } from "./quote";

export interface Quotes {
  page: number;
  last_page: boolean;
  quote: Quote[];
}
