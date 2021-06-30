import { RoleModel } from "./role-model";

export class UserModel {
  email: string;
  id: number;
  name: string;
  role: RoleModel;
  roles: RoleModel[];

  /**
   *
   */
  constructor() {
    this.email = 'n.giamberini@gmail.com';
    this.id = 1;
  }
}
