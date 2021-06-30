export class EditorialProjectStoreModel {
  title: string;
  sector_id: number;
  author_id: number;

  constructor(title: string, sector: number, author?:number){
    this.title = title;
    this.sector_id = sector;
    this.author_id = author;
  }
}
