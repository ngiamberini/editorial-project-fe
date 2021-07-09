import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { EditorialProject, PagedEditorialProject } from "src/models/editorial-project-model";
import { EditorialProjectService } from "src/services/editorial-projects-service";

@Injectable()
export class EditorialProjectResolver implements Resolve<PagedEditorialProject | EditorialProject>{

  constructor(private editorialProjectService: EditorialProjectService,
    private activatedRoute: ActivatedRoute){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.activatedRoute.snapshot.params.editorialProjectId){
      return this.editorialProjectService.getEditorialProjectById(this.activatedRoute.snapshot.params.editorialProjectId, true);
    }
    else{
      return this.editorialProjectService.getPagedEditorialProject(10, 1);
    }
  }

}
