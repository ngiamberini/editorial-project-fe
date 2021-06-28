import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from 'src/services/user-service';
import { EditorialProjectListComponent } from './editorial-project-list.component';
import { EditorialProjectListModule } from './editorial-project-list.module';


const routes: Routes = [{
  path: '',
  component: EditorialProjectListComponent
}];

@NgModule({
  imports: [EditorialProjectListModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserService]
})
export class AppRoutingModule { }
