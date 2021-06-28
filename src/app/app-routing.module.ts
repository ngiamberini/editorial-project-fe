import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from 'src/services/user-service';
import { EditorialProjectListComponent } from './editorial-project-list/editorial-project-list.component';
import { LoginComponent } from './login/login-component.component';
import { LoginModule } from './login/login.module';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'editorial-projects',
  component: EditorialProjectListComponent
}];

@NgModule({
  imports: [LoginModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[UserService]
})
export class AppRoutingModule { }
