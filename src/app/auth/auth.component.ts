import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { IUser } from '../core/models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  authType: string;
  isAuthenticating: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.authForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userService.isAuthenticated
      .subscribe(result => console.log(`isAuthenticated: ${result}`));
    
    this.route.url.subscribe(url => {
      this.authType = url[url.length - 1].path;
    });
  }

  OnSubmit(){
    this.isAuthenticating = true;
    const credentials = this.authForm.value as IUser;
    
    if(this.authType === 'login') {
      this.login(credentials);
    } else if(this.authType === 'register') {
      this.register(credentials);
    }
  }

  login(credentials: IUser) {
    this.userService.authenticate(credentials)
      .subscribe(isDone => this.isAuthenticating = !isDone);
  }

  register(credentials: IUser) {
    this.userService.register(credentials)
      .subscribe(isDone => this.isAuthenticating = !isDone);
  }

}
