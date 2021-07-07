import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppSettings } from "src/AppSettings";
import { EditorialProject, EditorialProjectResponse, PagedEditorialProject } from "src/models/editorial-project-model";
import { EditorialProjectStoreModel } from "src/models/editorial-project-store-model";

@Injectable({
  providedIn: 'root'
})
export class EditorialProjectService {

  baseUrl: string = AppSettings.API_URL + 'api/v1/editorial-projects';
  constructor(private http: HttpClient){}

  getPagedEditorialProject(page: number, pageIndex: number): Observable<PagedEditorialProject>{
    return this.http.get<PagedEditorialProject>(this.baseUrl);
  }

  saveEditorialProject(request: EditorialProjectStoreModel): Observable<EditorialProject>{
    return this.http.post<EditorialProject>(this.baseUrl, request);
  }

  getEditorialProjectById(id: number, includeSubResource: boolean): Observable<EditorialProject> {
    let url = this.baseUrl;

    if (includeSubResource){
      url += `/${id}?with=sector,author`;
    }

    return this.http.get<EditorialProjectResponse>(url).pipe(map((response) => response.data));
  }
}
