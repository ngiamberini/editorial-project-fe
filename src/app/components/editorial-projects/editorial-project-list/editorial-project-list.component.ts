import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PagedEditorialProject } from 'src/models/editorial-project-model';
import { EditorialProjectStoreModel } from 'src/models/editorial-project-store-model';
import { SectorModel, SectorPagedModel } from 'src/models/sector-model';
import { EditorialProjectService } from 'src/services/editorial-projects-service';
import { SectorsService } from 'src/services/sectors-service';
import { UserService } from 'src/services/user-service';
import { EditorialProjectModalData, EditorialProjectNewItemModalComponent } from '../editorial-project-new-item-modal/editorial-project-new-item-modal.component';

@Component({
  selector: 'app-editorial-project-list',
  templateUrl: './editorial-project-list.component.html',
  styleUrls: ['./editorial-project-list.component.scss']
})
export class EditorialProjectListComponent implements OnInit {
  displayedColumns: string[] = ['N°', 'title', 'pages', 'price'];

  pagedEditorialProjects: PagedEditorialProject;

  constructor(route: ActivatedRoute,
    private dialog: MatDialog,
    private sectorService: SectorsService,
    private userService: UserService,
    private editorialProjectService: EditorialProjectService) {
    if (route.snapshot.data.editorialProjects as PagedEditorialProject){
      this.pagedEditorialProjects = route.snapshot.data.editorialProjects;
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

      this.editorialProjectService.saveEditorialProject(formValue).subscribe((value) => {
        if(value != null){
          this.reload();
        }
      });
    });
  }

  reload(){
    this.editorialProjectService.getPagedEditorialProject(0, 15).subscribe((editorialProjects) => {
      this.pagedEditorialProjects = editorialProjects;
    });
  }

  retrieveAuthors() {
    return this.userService.getUsers();
  }

  retrieveSectors(): Observable<SectorModel[]> {
    return this.sectorService.getAll();
  }
}
