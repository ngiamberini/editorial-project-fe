import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/guards/auth-gards.service';
import { EditorialProjectResolver } from 'src/resolvers/editorial-project-resolver';
import { UserService } from 'src/services/user-service';
import { EditorialProjectContainerComponent } from './editorial-project-container/editorial-project-container.component';
import { EditorialProjectListComponent } from './editorial-project-list/editorial-project-list.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: EditorialProjectContainerComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      component: EditorialProjectListComponent,
      canActivate: [AuthGuard],
      resolve: { editorialProjects: EditorialProjectResolver }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserService]
})
export class EditorialProjectRoutingModule { }
