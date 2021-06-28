import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LoginModule } from './login/login.module';
import { UserService } from 'src/services/user-service';
import { HttpClientModule } from '@angular/common/http';
import { EditorialProjectListModule } from './editorial-project-list/editorial-project-list.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    LoginModule,
    EditorialProjectListModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
