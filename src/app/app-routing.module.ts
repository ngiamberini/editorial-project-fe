import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorialProjectResolver } from 'src/resolvers/editorial-project-resolver';
import { UserService } from 'src/services/user-service';
import { LoginComponent } from './components/login/login-component.component';
import { LoginModule } from './components/login/login.module';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'home',
  children: [
    {
      path: '',
      pathMatch: 'full',
      loadChildren: () => import('src/app/components/editorial-projects/editorial-project.module').then(m => m.EditorialProjectListModule)
    }
  ]
},
{
  path: '**',
  redirectTo: 'login'
}];

@NgModule({
  imports: [LoginModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserService, EditorialProjectResolver]
})
export class AppRoutingModule { }
