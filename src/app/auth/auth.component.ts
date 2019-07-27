import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { IUser } from '../core/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  authForm: FormGroup;
  authType: string;
  isAuthenticating: boolean = false;
  authSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.authForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.authType = url[url.length - 1].path;
    });

    this.authSubscription = this.authService.isAuthenticated
      .subscribe(result => {
        if(result) {
          this.router.navigateByUrl('/');
        }
      });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
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
    this.authService.authenticate(credentials)
      .subscribe(isDone => this.isAuthenticating = !isDone);
  }

  register(credentials: IUser) {
    this.authService.register(credentials)
      .subscribe(isDone => this.isAuthenticating = !isDone);
  }

}
