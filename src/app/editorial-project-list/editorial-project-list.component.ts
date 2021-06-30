import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PagedEditorialProject } from 'src/models/editorial-project-model';
import { SectorsService } from 'src/services/sectors-service';
import { EditorialProjectNewItemModalComponent } from '../editorial-project-new-item-modal/editorial-project-new-item-modal.component';

@Component({
  selector: 'app-editorial-project-list',
  templateUrl: './editorial-project-list.component.html',
  styleUrls: ['./editorial-project-list.component.scss']
})
export class EditorialProjectListComponent implements OnInit {
  displayedColumns: string[] = ['N°', 'title', 'pages', 'price'];

  pagedEditorialProjects: PagedEditorialProject = new PagedEditorialProject();

  constructor(route: ActivatedRoute,
    private dialog: MatDialog,
    private sectorService: SectorsService) {
    // if (route.snapshot.data.editorialProjects as PagedEditorialProject){
    //   this.pagedEditorialProjects = route.snapshot.data.editorialProjects;
    // }

    this.pagedEditorialProjects = new PagedEditorialProject();
   }

  ngOnInit(): void {
  }

  newEditorialProject() : void {

    this.dialog.open(EditorialProjectNewItemModalComponent);
  }

}
