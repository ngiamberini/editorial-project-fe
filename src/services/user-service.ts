import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppSettings } from "src/AppSettings";
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
}
