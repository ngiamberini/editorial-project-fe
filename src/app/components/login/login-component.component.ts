import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppSettings } from 'src/AppSettings';
import { LoginModel } from 'src/models/login-model';
import { LoginResponse } from 'src/models/login-response';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(formBuilder: FormBuilder,
    private userService: UserService,
    private route: Router){
    this.profileForm = formBuilder.group({
      userName: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required])
    });
  }

  ngOnInit(): void {
  }

  login(){
    if(this.profileForm.valid){
      this.isSubmitted = true;
      let loginModel = new LoginModel(this.profileForm.value.userName, this.profileForm.value.password);
      this.userService.login(loginModel)
      .subscribe(
        (authParams: LoginResponse) => {
          console.log(authParams);
          this.isSubmitted = false;
          localStorage.setItem(AppSettings.LOCAL_STORAGE_TOKEN_KEY, authParams.data.access_token);
          localStorage.setItem(AppSettings.LOCAL_STORAGE_TOKEN_TYPE_KEY, authParams.data.type);
          localStorage.setItem('user', JSON.stringify(authParams.data.user));

          this.route.navigate(['/home']);
        },
        (error) => {
          console.log(error);
          this.isSubmitted = false;
        }
      );
    }
  }

}
