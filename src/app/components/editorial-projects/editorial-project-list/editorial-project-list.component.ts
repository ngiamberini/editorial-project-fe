import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EditEditorialProject, EditorialProject, PagedEditorialProject } from 'src/models/editorial-project-model';
import { EditorialProjectStoreModel } from 'src/models/editorial-project-store-model';
import { SectorModel, SectorPagedModel } from 'src/models/sector-model';
import { EditorialProjectService } from 'src/services/editorial-projects-service';
import { SectorsService } from 'src/services/sectors-service';
import { SnackBarService } from 'src/services/snack-bar-service';
import { UserService } from 'src/services/user-service';
import { DeleteModalComponent, DeleteModalData } from '../../shared/delete-modal/delete-modal.component';
import { EditorialProjectModalData, EditorialProjectNewItemModalComponent } from '../editorial-project-new-item-modal/editorial-project-new-item-modal.component';

@Component({
  selector: 'app-editorial-project-list',
  templateUrl: './editorial-project-list.component.html',
  styleUrls: ['./editorial-project-list.component.scss']
})
export class EditorialProjectListComponent implements OnInit {
  displayedColumns: string[] = [
    'N°',
    'title',
    'pages',
    'price',
    'approvedByCEO',
    'approvedByEditorialDirector',
    'approvedBySalesDirector',
    'approvedByEditorialResponsible',
    'actions'];

  pagedEditorialProjects: PagedEditorialProject;

  currentPage: number = 1;
  pageSize: number = 10;
  loggedUserCanApprove: boolean = false;
  constructor(route: ActivatedRoute,
    private dialog: MatDialog,
    private sectorService: SectorsService,
    private userService: UserService,
    private editorialProjectService: EditorialProjectService,
    private router: Router,
    private snackBarService: SnackBarService) {
    if (route.snapshot.data.editorialProjects as PagedEditorialProject){
      this.pagedEditorialProjects = route.snapshot.data.editorialProjects;
      this.currentPage = this.pagedEditorialProjects.meta.current_page;
      this.pageSize = this.pagedEditorialProjects.meta.per_page;
    }
   }

  ngOnInit(): void {
  }

  async newEditorialProject() {
    let authors = await this.retrieveAuthors();
    let sectors = await this.retrieveSectors();

    let modalData = new EditorialProjectModalData(sectors, authors);

    let dialogRef = this.dialog.open(EditorialProjectNewItemModalComponent, {
      data: modalData
    });

    dialogRef.afterClosed().subscribe((formValue) => {

      this.editorialProjectService.saveEditorialProject(formValue).subscribe(
        (value) => {
         this.snackBarService.showMessage('Editorial project created successfully1');
         this.reload();
      });
    });
  }

  reload(){
    this.editorialProjectService.getPagedEditorialProject(this.pageSize, this.currentPage,).subscribe((editorialProjects) => {
      this.pagedEditorialProjects = editorialProjects;
    });
  }

  retrieveAuthors() {
    return this.userService.getUsers();
  }

  retrieveSectors(): Observable<SectorModel[]> {
    return this.sectorService.getAll();
  }

  delete(id: number){
    const deleteData = new DeleteModalData(id, `Are you sure to delete element with id: ${id}`);
    let deleteModalRef = this.dialog.open<DeleteModalComponent, DeleteModalData, number> (DeleteModalComponent, {
      data: deleteData
    });

    deleteModalRef.afterClosed().subscribe(
      (elementId: number) => {
        if(elementId > 0){
          this.editorialProjectService.delete(elementId).subscribe(
            () => {
              this.snackBarService.showMessage(`Element deleted successfully`);
            },
            (errMessage) => {}
          );
        }
      }
    );
  }

  changePagesOrSize($event: PageEvent){
    this.currentPage = $event.pageIndex + 1;
    this.pageSize = $event.pageSize;

    this.reload();
  }

  approve(project: EditorialProject) {
    this.loggedUserCanApprove = this.userService.canApproveEditorialProject(project);

    if(this.loggedUserCanApprove){
      let request = this.getUpdatedEditorialPrject(project);

      this.editorialProjectService.edit(request.id, request).subscribe(
        (result) => {
          if(result){
            this.snackBarService.showMessage('Editorial project approved successfully');
            this.reload();
          }
        },
        (error) => {
          debugger;
          this.snackBarService.showMessage('Error during approvement process');
        }
      )
    }
  }

  getUpdatedEditorialPrject(project: EditorialProject) {
    let updatedEditorialProject: EditEditorialProject = {
      id : project.id,
      title: project.title,
      is_approved_by_ceo: project.is_approved_by_ceo,
      is_approved_by_editorial_director: project.is_approved_by_editorial_director,
      is_approved_by_editorial_responsible: project.is_approved_by_editorial_responsible,
      is_approved_by_sales_director: project.is_approved_by_sales_director,
      publication_date: project.publication_date,
      pages: project.pages,
      price: project.price,
      cost: project.cost,
      author_id: project.author_id,
      sector_id: project.sector_id
    };

    let loggedUser  = this.userService.getUserFromLocalStorage();

    switch(loggedUser.role.name) {
      case 'Editorial responsible':
        updatedEditorialProject.is_approved_by_editorial_responsible = true;
        break;
      case 'Sales director':
        updatedEditorialProject.is_approved_by_sales_director = true;
        break;
      case 'Editorial director':
        updatedEditorialProject.is_approved_by_editorial_director = true;
        break;
    }

    return updatedEditorialProject;
  }
}
