import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagedEditorialProject } from 'src/models/editorial-project-model';

@Component({
  selector: 'app-editorial-project-list',
  templateUrl: './editorial-project-list.component.html',
  styleUrls: ['./editorial-project-list.component.scss']
})
export class EditorialProjectListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  pagedEditorialProjects: PagedEditorialProject;

  constructor(route: ActivatedRoute) {
    if (route.snapshot.data.editorialProjects as PagedEditorialProject){
      this.pagedEditorialProjects = route.snapshot.data.editorialProjects;
    }
   }

  ngOnInit(): void {
  }

}
