import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LoginModule } from './components/login/login.module';
import { UserService } from 'src/services/user-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditorialProjectListModule } from './components/editorial-projects/editorial-project.module';
import { AuthInterceptor } from 'src/interceptors/auth-interceptors';
import {MatIconModule} from '@angular/material/icon';
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
    LoginModule,
    EditorialProjectListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
