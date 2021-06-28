import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "src/services/user-service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{

  constructor(
    private userService: UserService
  ){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url.endsWith('login')){
      return next.handle(req);
    }

    let authParams = this.userService.retrieveAuthorizationData();

    let newReq = req.clone({
      setHeaders: {
        'Authorization': authParams.data.type + ' ' +  authParams.data.access_token
       }
    });

    return next.handle(newReq);
  }

}
