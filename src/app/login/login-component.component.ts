import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm: FormGroup;

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
      //
    }
  }

}
