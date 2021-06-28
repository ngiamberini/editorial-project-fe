import { UserModel } from "./user-model";

export class LoginResponse {
  data: AuthData;
}

export class AuthData {
  access_token: string;
  type: string;
  user: UserModel;
}
