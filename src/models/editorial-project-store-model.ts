export class EditorialProjectStoreModel {
  title: string;
  sector_id: number;
  author_id: number;
  publication_date: Date;
  pages: number;
  price: number;
  cost: number;

  constructor(title: string, sector: number, publicationDate: Date, pages: number, price: number, cost: number, author?:number){
    this.title = title;
    this.sector_id = sector;
    this.author_id = author;
    this.publication_date = publicationDate;
    this.pages = pages;
    this.price = price;
    this.cost = cost;
  }
}

