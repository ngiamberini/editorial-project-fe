import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppSettings } from "src/AppSettings";
import { SectorPagedModel } from "src/models/sector-model";

@Injectable({
  providedIn: 'root'
})
export class SectorsService {

  constructor(
    private httpClient: HttpClient
  ){
  }

  getAll() : Observable<SectorPagedModel> {
    return this.httpClient.get<SectorPagedModel>(AppSettings.API_URL + 'api/v1/sectors');
  }
}
