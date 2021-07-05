import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EditorialProjectListComponent } from './editorial-project-list/editorial-project-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { EditorialProjectNewItemModalComponent } from './editorial-project-new-item-modal/editorial-project-new-item-modal.component';
import { MatSelectModule } from '@angular/material/select';
import { SectorsService } from 'src/services/sectors-service';
import { EditorialProjectContainerComponent } from './editorial-project-container/editorial-project-container.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EditorialProjectRoutingModule } from './editorial-project-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    EditorialProjectListComponent,
    EditorialProjectNewItemModalComponent,
    EditorialProjectContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    EditorialProjectRoutingModule
  ],
  providers: [SectorsService],
  exports: [
    EditorialProjectContainerComponent
  ]
})
export class EditorialProjectListModule{}
