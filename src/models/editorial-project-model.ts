import { UserModel } from "./user-model";

export class PagedEditorialProject {
  data: EditorialProject[];
  meta: PagedMeta;
  //delete all constructors!
  constructor(){
    this.data= [new EditorialProject(1), new EditorialProject(2), new EditorialProject(3)]
    this.meta= new PagedMeta();
  }
}

export class EditorialProject {
  id : number;
  title : string;
  is_approved_by_ceo: number;
  is_approved_by_editorial_director: number;
  is_approved_by_editorial_responsible: number;
  is_approved_by_sales_director: number;
  publication_date: Date;
  pages: number;
  price: number;
  cost: number;
  author: UserModel;

  constructor(id: number){
    this.id= id;
    this.title= 'progetto ' + id.toString();
    this.is_approved_by_ceo= 0;
    this.is_approved_by_editorial_director= 0;
    this.is_approved_by_editorial_responsible= 0;
    this.is_approved_by_sales_director= 0;
    this.pages= 1;
    this.price= 50;
    this.cost= 10;
    this.author= new UserModel();
  }
}

export class PagedMeta {
  current_page: number;
  last_page: number;
  per_page: number;
}
