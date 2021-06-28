import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EditorialProjectListComponent } from './editorial-project-list.component';

@NgModule({
  declarations: [
    EditorialProjectListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  exports: [
    EditorialProjectListComponent
  ]
})
export class EditorialProjectListModule{}
