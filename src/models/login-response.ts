import { UserModel } from "./user-model";

export class LoginResponse {
  public data: AuthData;

  constructor(token: string, type: string){
    this.data = new AuthData(token, type);
  }
}

export class AuthData {
  access_token: string;
  type: string;
  user: UserModel = new UserModel();

  constructor(token: string, type: string){
    this.access_token = token;
    this.type = type;
  }

}
