import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { EditorialProjectStoreModel } from 'src/models/editorial-project-store-model';
import { SectorModel, SectorPagedModel } from 'src/models/sector-model';
import { PagedUserModel, UserModel } from 'src/models/user-model';

@Component({
  selector: 'app-editorial-project-new-item-modal',
  templateUrl: './editorial-project-new-item-modal.component.html',
  styleUrls: ['./editorial-project-new-item-modal.component.scss']
})
export class EditorialProjectNewItemModalComponent implements OnInit {

  newEditorialProjectFormGroup: FormGroup;
  sectors$: Observable<SectorModel[]>;
  authors: UserModel[];

  authorsSubscription$: Subscription;


  constructor(
    private matDialogRef: MatDialogRef<EditorialProjectNewItemModalComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: EditorialProjectModalData
  ) {
    this.sectors$ = data.sectors;

    this.authorsSubscription$ = data.authors.subscribe((pagedAuthors) => {
      this.authors = pagedAuthors.data;
    });
  }

  ngOnInit(): void {
    this.newEditorialProjectFormGroup = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      sectorId: new FormControl('', Validators.required),
      authorId: new FormControl('', Validators.required),
      pages: new FormControl('', Validators.max(1500)),
      price: new FormControl(''),
      cost: new FormControl('')
    });
  }

  saveEditorialProject(){
    if (this.newEditorialProjectFormGroup.valid){
      let editorialProject = new EditorialProjectStoreModel(this.newEditorialProjectFormGroup.value.title,
        this.newEditorialProjectFormGroup.value.sectorId,
        new Date(),
        this.newEditorialProjectFormGroup.value.pages,
        this.newEditorialProjectFormGroup.value.price,
        this.newEditorialProjectFormGroup.value.cost,
        this.newEditorialProjectFormGroup.value.authorId);

      this.matDialogRef.close(editorialProject);
    }
  }
}

export class EditorialProjectModalData {
  sectors: Observable<SectorModel[]>;
  authors: Observable<PagedUserModel>;

  constructor(sectors: Observable<SectorModel[]>, authors: Observable<PagedUserModel>) {
    this.sectors = sectors;
    this.authors = authors;
  }
}
