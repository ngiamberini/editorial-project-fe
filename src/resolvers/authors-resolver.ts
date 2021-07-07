import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserModel } from "src/models/user-model";
import { UserService } from "src/services/user-service";

@Injectable()
export class AuthorsResolver implements Resolve<UserModel[]>{
  constructor(private userService: UserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserModel[] | Observable<UserModel[]> | Promise<UserModel[]> {
    return this.userService.getUsers().pipe(map((paged) => paged.data));
  }

}
