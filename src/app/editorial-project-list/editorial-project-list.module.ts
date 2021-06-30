import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EditorialProjectListComponent } from './editorial-project-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { EditorialProjectNewItemModalComponent } from '../editorial-project-new-item-modal/editorial-project-new-item-modal.component';
import { MatSelectModule } from '@angular/material/select';
import { SectorsService } from 'src/services/sectors-service';

@NgModule({
  declarations: [
    EditorialProjectListComponent,
    EditorialProjectNewItemModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers:[SectorsService],
  exports: [
    EditorialProjectListComponent
  ]
})
export class EditorialProjectListModule{}
