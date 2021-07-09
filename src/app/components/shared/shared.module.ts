import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { DeleteModalComponent } from "./delete-modal/delete-modal.component";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarService } from "src/services/snack-bar-service";
@NgModule({
  declarations: [
    DeleteModalComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [
    DeleteModalComponent
  ],
  providers: [SnackBarService]
})
export class SharedModule { }
