import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../core/services/auth.service';
import { IUser } from '../core/models/User.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileForm: FormGroup;
  user: IUser;
  userSubscription: Subscription;
  isUpdating: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.profileForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userSubscription = this.authService.user
      .subscribe(user => this.user = user);
    
    this.profileForm.patchValue(this.user);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onUpdate() {
    this.isUpdating = true;

    Object.assign(this.user, this.profileForm.value);  

    this.authService.update(this.user)
      .subscribe(isDone => this.isUpdating = !isDone);
  }

  onDelete() {
    this.isUpdating = true;

    this.authService.delete()
      .subscribe(isDone => this.isUpdating = !isDone);
      
    this.router.navigateByUrl('/');
  }
}
