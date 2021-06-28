import { RoleModel } from "./role-model";

export class UserModel {
  email: string;
  id: number;
  name: string;
  role: RoleModel;
  roles: RoleModel[];
}
