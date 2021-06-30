import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editorial-project-new-item-modal',
  templateUrl: './editorial-project-new-item-modal.component.html',
  styleUrls: ['./editorial-project-new-item-modal.component.scss']
})
export class EditorialProjectNewItemModalComponent implements OnInit {

  newEditorialProjectFormGroup: FormGroup;
  sectors: [];
  authors: [];

  constructor(
    private matDialogRef: MatDialogRef<EditorialProjectNewItemModalComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { }

  ngOnInit(): void {
    this.newEditorialProjectFormGroup = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      sectorId: new FormControl('', Validators.required),
      authorId: new FormControl('')
    })
  }
}
