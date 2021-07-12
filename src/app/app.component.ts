import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from 'src/AppSettings';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EditorialProject';
  logged= false;
  constructor(private userService: UserService,
    private router: Router){
    this.logged = this.userService.isLoggedIn();

    if(this.logged){
      this.router.navigate(['./home']);
    }
  }

  goToLogin(){
    this.logout();
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['./login']);
  }
}
