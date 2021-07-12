import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppSettings } from "src/AppSettings";
import { EditorialProject } from "src/models/editorial-project-model";
import { LoginModel } from "src/models/login-model";
import { AuthData, LoginResponse } from "src/models/login-response";
import { PagedUserModel, UserModel } from "src/models/user-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){}

  login(loginModel: LoginModel): Observable<LoginResponse>{
    let url = AppSettings.API_URL + 'api/v1/login';

    return this.http.post<LoginResponse>(url, loginModel);
  }

  getUsers(): Observable<PagedUserModel>{
    return this.http.get<PagedUserModel>(AppSettings.API_URL + 'api/v1/users');
  }

  retrieveAuthorizationData(): LoginResponse {
    let token = localStorage.getItem(AppSettings.LOCAL_STORAGE_TOKEN_KEY);
    let tokenType = localStorage.getItem(AppSettings.LOCAL_STORAGE_TOKEN_TYPE_KEY);

    return new LoginResponse(token, tokenType);
  }

  getUserFromLocalStorage(): UserModel {
    const user = localStorage.getItem('user');

    return JSON.parse(user);
  }

  canApproveEditorialProject(project: EditorialProject): boolean {
    let user = this.getUserFromLocalStorage();

    switch(user.role.name) {
      case 'Editorial responsible':
        return !project.is_approved_by_editorial_responsible;
      case 'Sales director':
        return !project.is_approved_by_sales_director;
      case 'Editorial director':
        return project.is_approved_by_editorial_responsible &&
               project.is_approved_by_sales_director &&
               !project.is_approved_by_editorial_director;
      default:
        return false;
    }
  }

  isLoggedIn() : boolean{
    let user = this.getUserFromLocalStorage();

    if(user){
      return true;
    }

    return false;
  }

  storeLoggedUser(authData: AuthData){
    localStorage.setItem(AppSettings.LOCAL_STORAGE_TOKEN_KEY, authData.access_token);
    localStorage.setItem(AppSettings.LOCAL_STORAGE_TOKEN_TYPE_KEY, authData.type);
    localStorage.setItem(AppSettings.LOCAL_STORAGE_USER_KEY, JSON.stringify(authData.user));
  }
  logout() {
    localStorage.removeItem(AppSettings.LOCAL_STORAGE_TOKEN_KEY);
    localStorage.removeItem(AppSettings.LOCAL_STORAGE_TOKEN_TYPE_KEY);
    localStorage.removeItem(AppSettings.LOCAL_STORAGE_USER_KEY);
  }
}
