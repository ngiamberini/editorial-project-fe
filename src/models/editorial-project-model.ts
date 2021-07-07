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
  is_approved_by_ceo: number;
  is_approved_by_editorial_director: number;
  is_approved_by_editorial_responsible: number;
  is_approved_by_sales_director: number;
  publication_date: Date;
  pages: number;
  price: number;
  cost: number;
  author: UserModel;
  sector: SectorModel;
}

export class PagedMeta {
  current_page: number;
  last_page: number;
  per_page: number;
}
