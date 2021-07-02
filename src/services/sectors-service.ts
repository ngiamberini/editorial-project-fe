import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppSettings } from "src/AppSettings";
import { SectorModel, SectorPagedModel } from "src/models/sector-model";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SectorsService {

  constructor(
    private httpClient: HttpClient
  ){
  }

  getAll(): Observable<SectorModel[]> {
    return this.httpClient.get<SectorPagedModel>(AppSettings.API_URL + 'api/v1/sectors')
    .pipe(
      map((pagedSectors) => pagedSectors.data)
    );
  }
}
