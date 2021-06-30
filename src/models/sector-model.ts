import { PagedMeta } from "./editorial-project-model";

export class SectorPagedModel {
  data: SectorModel[];
  meta: PagedMeta;
  //delete all constructors!
  constructor(){
    this.data= [];
    this.meta= new PagedMeta();
  }
}

export class SectorModel {
  id: number;
  key: string;
  name: string;
  description: string;
}
