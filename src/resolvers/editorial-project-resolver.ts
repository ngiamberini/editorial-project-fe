import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { EditorialProject, PagedEditorialProject } from "src/models/editorial-project-model";
import { EditorialProjectService } from "src/services/editorial-projects-service";

@Injectable()
export class EditorialProjectResolver implements Resolve<PagedEditorialProject>{

  constructor(private editorialProjectService: EditorialProjectService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.editorialProjectService.getPagedEditorialProject(0, 15);
  }

}
