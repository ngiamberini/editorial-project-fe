import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/guards/auth-gards.service';
import { AuthorsResolver } from 'src/resolvers/authors-resolver';
import { EditorialProjectResolver } from 'src/resolvers/editorial-project-resolver';
import { SectorResolver } from 'src/resolvers/sectors-resolver';
import { UserService } from 'src/services/user-service';
import { EditEditorialProjectComponent } from './edit-editorial-project/edit-editorial-project.component';
import { EditorialProjectContainerComponent } from './editorial-project-container/editorial-project-container.component';
import { EditorialProjectListComponent } from './editorial-project-list/editorial-project-list.component';

const routes: Routes = [{
  path: '',
  component: EditorialProjectContainerComponent,
  children: [
    {
      path: '',
      component: EditorialProjectListComponent,
      canActivate: [AuthGuard],
      resolve: { editorialProjects: EditorialProjectResolver },
    },
    {
      path: ':editorialProjectId',
      component: EditEditorialProjectComponent,
      resolve: { sectors: SectorResolver, authors: AuthorsResolver}
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SectorResolver, AuthorsResolver]
})
export class EditorialProjectRoutingModule { }
