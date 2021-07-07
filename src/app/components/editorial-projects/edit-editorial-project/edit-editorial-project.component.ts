import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EditorialProject } from 'src/models/editorial-project-model';
import { EditorialProjectService } from 'src/services/editorial-projects-service';

@Component({
  selector: 'app-edit-editorial-project',
  templateUrl: './edit-editorial-project.component.html',
  styleUrls: ['./edit-editorial-project.component.scss']
})
export class EditEditorialProjectComponent implements OnInit, OnDestroy {

  editorialProjectId: number;
  editorialProjectSubscription$: Subscription;

  editorialProject: EditorialProject;
  editEditorialProjectFormGroup: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private editorialProjectService: EditorialProjectService,
    private formBuilder: FormBuilder) {
    this.editorialProjectId = this.activatedRoute.snapshot.params.editorialProjectId;
    this.loadForm();
  }

  ngOnInit(): void {
    this.editorialProjectSubscription$ =
      this.editorialProjectService.getEditorialProjectById(this.editorialProjectId, true).subscribe(
        (editorialProject) => {
          this.editorialProject = editorialProject;
          this.loadForm();
        }
      );
  }

  ngOnDestroy(): void {
    this.editorialProjectSubscription$.unsubscribe();
  }

  loadForm() {
    if (this.editorialProject){
      this.editEditorialProjectFormGroup.patchValue({
        title: this.editorialProject.title,
        authorId: this.editorialProject.author.id,
        pages: this.editorialProject.pages,
        price: this.editorialProject.price,
        cost: this.editorialProject.cost,
        sectorId: this.editorialProject.sector.id
      });
    }
    else{
      this.editEditorialProjectFormGroup = this.formBuilder.group({
        title: new FormControl('', Validators.required),
        authorId: new FormControl('', Validators.required),
        pages: new FormControl('', Validators.max(1500)),
        price: new FormControl(''),
        cost: new FormControl(''),
        sectorId: new FormControl('', Validators.required),
      });
    }
  }
}
