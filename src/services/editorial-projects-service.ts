import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppSettings } from "src/AppSettings";
import { PagedEditorialProject } from "src/models/editorial-project-model";

@Injectable({
  providedIn: 'root'
})
export class EditorialProjectService {

  constructor(private http: HttpClient){}

  getPagedEditorialProject(page: number, pageIndex: number): Observable<PagedEditorialProject>{
    let url = AppSettings.API_URL + 'api/v1/editorial-projects';

    return this.http.get<PagedEditorialProject>(url);
  }
}
