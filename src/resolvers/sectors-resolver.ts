import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { SectorModel } from "src/models/sector-model";
import { SectorsService } from "src/services/sectors-service";

export class SectorResolver implements Resolve<SectorModel[]> {

  constructor(private sectorService: SectorsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SectorModel[] | Observable<SectorModel[]> | Promise<SectorModel[]> {
    return this.sectorService.getAll();
  }

}
