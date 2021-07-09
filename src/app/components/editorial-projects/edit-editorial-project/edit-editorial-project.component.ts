import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { EditorialProject } from 'src/models/editorial-project-model';
import { SectorModel } from 'src/models/sector-model';
import { UserModel } from 'src/models/user-model';
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
  unmodifiedEditorialProject: EditorialProject;
  editEditorialProjectFormGroup: FormGroup;

  sectors: SectorModel[];
  authors: UserModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private editorialProjectService: EditorialProjectService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.editorialProjectId = this.activatedRoute.snapshot.params.editorialProjectId;

    this.sectors = this.activatedRoute.snapshot.data.sectors;
    this.authors = this.activatedRoute.snapshot.data.authors;
    this.loadForm();
  }

  ngOnInit(): void {
    this.editorialProjectSubscription$ =
      this.editorialProjectService.getEditorialProjectById(this.editorialProjectId, true).subscribe(
        (editorialProject) => {
          this.editorialProject = editorialProject;
          this.unmodifiedEditorialProject = this.editorialProject;
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

  reset(){
    this.editorialProject = this.unmodifiedEditorialProject;
    this.loadForm();
  }

  editEditorialProject(){
    console.log('ciao');
  }

  back(){
    this.router.navigate(['./home']);
  }

}
