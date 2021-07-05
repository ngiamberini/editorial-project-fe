import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
// import { LoginRoutingModule } from './login-component-routing.module';
import { LoginComponent } from './login-component.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    // LoginRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule{}
