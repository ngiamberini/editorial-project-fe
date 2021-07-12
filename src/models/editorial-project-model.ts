import { EditorialProjectStoreModel } from "./editorial-project-store-model";
import { SectorModel } from "./sector-model";
import { UserModel } from "./user-model";

export class PagedEditorialProject {
  data: EditorialProject[];
  meta: PagedMeta;
}

export class EditorialProjectResponse {
  data: EditorialProject;
}

export class EditorialProject {
  id: number;
  title: string;
  is_approved_by_ceo: boolean;
  is_approved_by_editorial_director: boolean;
  is_approved_by_editorial_responsible: boolean;
  is_approved_by_sales_director: boolean;
  publication_date: string;
  pages: number;
  price: number;
  cost: number;
  author_id: number;
  sector_id: number;
  author: UserModel;
  sector: SectorModel;
}

export class EditEditorialProject {
  id: number;
  title: string;
  is_approved_by_ceo: boolean;
  is_approved_by_editorial_director: boolean;
  is_approved_by_editorial_responsible: boolean;
  is_approved_by_sales_director: boolean;
  publication_date: string;
  pages: number;
  price: number;
  cost: number;
  author_id: number;
  sector_id: number;

  constructor(id: number, storeModel: EditorialProjectStoreModel){
    this.id = id;
    this.title = storeModel.title;
    this.is_approved_by_ceo = false;
    this.is_approved_by_editorial_director = false;
    this.is_approved_by_editorial_responsible = false;
    this.is_approved_by_sales_director = false;
    this.publication_date = storeModel.publication_date;
    this.pages = storeModel.pages;
    this.price = storeModel.price;
    this.cost = storeModel.cost;
    this.author_id = storeModel.author_id;
    this.sector_id = storeModel.sector_id;
  }
}
export class PagedMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
