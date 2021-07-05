import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-editorial-project',
  templateUrl: './edit-editorial-project.component.html',
  styleUrls: ['./edit-editorial-project.component.scss']
})
export class EditEditorialProjectComponent implements OnInit {

  editorialProjectId: number;
  constructor(private activatedRoute: ActivatedRoute) {
    debugger;
    this.editorialProjectId = this.activatedRoute.snapshot.params.editorialProjectId;
   }

  ngOnInit(): void {
  }

}
