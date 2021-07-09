import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { element } from 'protractor';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  modalData: DeleteModalData;
  constructor(private matDialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: DeleteModalData ) {
      this.modalData = data;
    }

  ngOnInit(): void {
  }

  deleteElement(){
    this.matDialogRef.close(this.modalData.elementId);
  }
}

export class DeleteModalData {
  elementId: number;
  deleteMessage: string;

  constructor(id: number, message: string){
    this.elementId = id;
    this.deleteMessage = message;
  }
}
