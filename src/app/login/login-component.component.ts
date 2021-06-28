import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private userService: UserService){
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
      .subscribe((authParams: LoginResponse) => {
        console.log(authParams);
        this.isSubmitted = false;
        localStorage.setItem('token', authParams.data.access_token);
        localStorage.setItem('type', authParams.data.type);
        // localStorage.setItem('user', authParams.data.user);
      });
    }
  }

}
